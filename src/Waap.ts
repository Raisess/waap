import ICrawler from "./Crawler/ICrawler";

export default class Wapp {
  private readonly apiUrl: string = "https://web.whatsapp.com/send";

  constructor(
    private readonly crawler: ICrawler,
    private readonly DDD: string,
  ) {}

  public async openChat(phone: string, message: string): Promise<void> {
    await this.crawler.goto(
      `${this.apiUrl}?phone=${this.DDD}${phone}&text=${encodeURI(message)}`,
    );
  }

  public async sendMessage(): Promise<void> {
    await this.crawler.click("button", "_4sWnG");
  }
}
