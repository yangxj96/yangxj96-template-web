export default class FileHelper {
  /**
   * 文件分片
   * @param file 需要分片的文件
   * @param chunkSize 每片大小
   */
  static createFileChunks(file: File, chunkSize: number = 1024 * 10) {
    const chunks: Blob[] = [];
    const count = Math.ceil(file.size / chunkSize);
    for (let i = 0; i < count; i++) {
      const offset = i * chunkSize;
      const slice = file.slice(offset, offset + chunkSize + 1);
      chunks.push(slice);
    }
    return chunks;
  }
}
