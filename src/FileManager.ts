import util from "util";
import fs from "fs";
import path from "path";

export default class FileManager {
  private readonly readFile: any;

  constructor() {
    this.readFile = util.promisify(fs.readFile);
  }

  public async readMessage(): Promise<string> {
    return this.readFile(path.join(__dirname, "..", "message.txt"), {
      encoding: "utf-8",
    });
  }

  public async readList(): Promise<string[]> {
    const list = (await this.readFile(path.join(__dirname, "..", "list.txt"), {
      encoding: "utf-8",
    })) as string;

    return list
      .split(/[\n|,|\s+]/)
      .filter((i) => i !== "")
      .map((i) => i.trim());
  }
}
