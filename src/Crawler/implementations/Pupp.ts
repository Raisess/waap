import ICrawler from "../ICrawler";
import puppeter, { Browser, Page } from "puppeteer";

export default class Pupp implements ICrawler {
  private browser!: Browser;
  private page!: Page;

  public async init(): Promise<void> {
    this.browser = await puppeter.launch({
      headless: false,
      defaultViewport: null,
      userDataDir: "/tmp/fvck_im_da_hacker",
    });
    this.page = await this.browser.newPage();
  }

  public async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  public async write(content: string): Promise<void> {
    await this.page.keyboard.type(content);
    await this.page.keyboard.press("Enter");
  }

  public async click(
    componentTag: string,
    componentClass: string,
  ): Promise<void> {
    await this.page.waitForSelector(`${componentTag}[class=${componentClass}]`);
    await this.page.click(`${componentTag}[class=${componentClass}]`);
  }

  public async close(): Promise<void> {
    await this.browser.close();
  }
}
