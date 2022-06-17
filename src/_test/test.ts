import { OsuCollectorNode } from "../index";

const cookie = "";

new OsuCollectorNode()
  .getUser<"Uploads">({ id: 2051389, route: "uploads" })
  .then((data) => console.log(data?.collections[0]))
  .catch(() => null);
