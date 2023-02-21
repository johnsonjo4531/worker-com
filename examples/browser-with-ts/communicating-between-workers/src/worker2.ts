import { ReadWriteChannel } from "worker-com";
import { MyMessage } from "./message-types.js";

const rwChannel = new ReadWriteChannel<MyMessage, MyMessage>();

(async () => {
  for await (const item of rwChannel.readAll.string()) {
    rwChannel.write.string(`${item}!!!!`);
  }
})();
