import * as fs from 'fs';
import * as path from 'path';

export class JsonFileStorage<T> {
  private filePath: string;
  private writeQueue: Promise<void>;

  constructor(filename: string) {
    this.filePath = path.resolve(__dirname, filename);
    this.writeQueue = Promise.resolve(); // Initialize the write queue
  }

  /**
   * 异步读取 JSON 文件内容
   * @returns Promise<T> 解析后的 JSON 对象
   */
  public async read(): Promise<T> {
    await this.writeQueue; // Wait for any ongoing write operations to complete
    return this.handleReadOperation();
  }

  /**
   * 异步写入 JSON 文件内容
   * @param data 要写入的 JSON 对象
   * @returns Promise<void> 写入完成后解析
   */
  public async write(data: T): Promise<void> {
    await this.writeQueue; // Wait for any ongoing write operations to complete
    await this.handleWriteOperation(data);
  }

  /**
   * 安全地异步写入 JSON 文件内容，确保写入操作按顺序执行
   * @param data 要写入的 JSON 对象
   * @returns Promise<void> 当前的写入操作完成后解析
   */
  public async safeWrite(data: T): Promise<void> {
    // Add the new write operation to the queue and wait for it to complete
    this.writeQueue = this.writeQueue.then(() =>
      this.handleWriteOperation(data),
    );
    return this.writeQueue;
  }

  private async handleReadOperation(): Promise<T> {
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

  private async handleWriteOperation(data: T): Promise<void> {
    const jsonContent = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(this.filePath, jsonContent, 'utf8');
  }
}
