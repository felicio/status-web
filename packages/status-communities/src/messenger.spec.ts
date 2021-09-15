// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No types available
import TCP from "libp2p-tcp";

import { Messenger } from "./messenger";

const testChatId = "test-chat-id";

describe("Messenger", () => {
  let messenger1: Messenger;
  let messenger2: Messenger;

  beforeEach(async function () {
    [messenger1, messenger2] = await Promise.all([
      Messenger.create(),
      Messenger.create({
        libp2p: { addresses: { listen: ["/ip4/0.0.0.0/tcp/0/ws"] } },
      }),
    ]);

    // Connect both messengers together for test purposes
    messenger1.waku.addPeerToAddressBook(
      messenger2.waku.libp2p.peerId,
      messenger2.waku.libp2p.multiaddrs
    );

    await Promise.all([
      new Promise((resolve) =>
        messenger1.waku.libp2p.pubsub.once("pubsub:subscription-change", () =>
          resolve(null)
        )
      ),
      new Promise((resolve) =>
        messenger2.waku.libp2p.pubsub.once("pubsub:subscription-change", () =>
          resolve(null)
        )
      ),
    ]);
  });

  it("Sends message in public chat", function () {
    messenger1.joinChat(testChatId);
    messenger2.joinChat(testChatId);
  });

  afterEach(async function () {
    this.timeout(5000);
    await messenger1.stop();
    await messenger2.stop();
  });
});
