import * as fs from 'fs';
import * as path from 'path';

export class JsonFileStorage<T> {
  private filePath: string;

  constructor(filename: string) {
    this.filePath = path.resolve(__dirname, filename);
  }

  /**
   * 异步读取 JSON 文件内容
   * @returns Promise<T> 解析后的 JSON 对象
   */
  public async read(): Promise<T> {
    try {
      const fileContent = await fs.promises.readFile(this.filePath, 'utf8');
      return JSON.parse(fileContent) as T;
    } catch (error) {
      if (error.code === 'ENOENT') {
        // 文件不存在，返回默认值或空对象
        return {} as T;
      }
      throw error;
    }
  }

  /**
   * 异步写入 JSON 文件内容
   * @param data 要写入的 JSON 对象
   * @returns Promise<void> 写入完成后解析
   */
  public async write(data: T): Promise<void> {
    const fileContent = JSON.stringify(data, null, 2); // 格式化 JSON 字符串
    await fs.promises.writeFile(this.filePath, fileContent, 'utf8');
  }

  // 私有属性，用于确保写入操作的顺序执行
  private writeQueue: Promise<void> = Promise.resolve();

  /**
   * 安全地异步写入 JSON 文件内容，确保写入操作按顺序执行
   * @param data 要写入的 JSON 对象
   * @returns Promise<void> 当前的写入操作完成后解析
   */
  public async safeWrite(data: T): Promise<void> {
    this.writeQueue = this.writeQueue.then(() => this.write(data));
    return this.writeQueue;
  }
}

// 使用示例
// const storage = new JsonFileStorage<MyDataType>('data.json');
// await storage.safeWrite(myData);
// const data = await storage.read();
