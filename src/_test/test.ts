import { OsuCollectorNode } from "../index";

const cookie = "";

(async () => {
  console.log(
    await new OsuCollectorNode()
      .getCollection<"Collection">({ id: 400 })
      .catch(() => null)
  );
})();
