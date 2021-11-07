import Pupp from "./Crawler/implementations/Pupp";
import Waap from "./Waap";
import FileManager from "./FileManager";

const crawler = new Pupp();
const whatsapp = new Waap(crawler, "55");
const fm = new FileManager();

(async () => {
  const contacts = await fm.readList();
  const message = await fm.readMessage();

  await crawler.init();

  for (const contact of contacts) {
    await new Promise(async (resolve) => {
      await whatsapp.openChat(contact, message);
      await whatsapp.sendMessage();

      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  }

  await crawler.close();
})();
