import { OsuCollectorNode } from "../structure";

const cookie = "";

(async () => {
  console.log(
    (await new OsuCollectorNode().getCollection(400))?.modes.osu
  );
})();
