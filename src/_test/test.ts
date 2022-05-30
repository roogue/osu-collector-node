import { OsuCollectorNode } from "../index";

const cookie =
  "";

(async () => {
  console.log(
    await new OsuCollectorNode()
      .setCookie(cookie)
      .getUserMe<"TwitchSub">({ route: "twitchSub" })
      .catch(() => null)
  );
})();
