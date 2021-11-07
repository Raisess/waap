export default interface ICrawler {
  init(): Promise<void>;
  goto(url: string): Promise<void>;
  write(content: string): Promise<void>;
  click(componentTag: string, componentClass: string): Promise<void>;
  close(): Promise<void>;
}
