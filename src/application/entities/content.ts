export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validaContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isConentLengthValid = this.validaContentLength(content);

    if (!isConentLengthValid) {
      throw new Error('Content length error');
    }

    this.content = content;
  }
}
