import { OsuCollectorNode } from "../structure";

const cookie = "";

new OsuCollectorNode()
  .getUserUploads(13198242).then(console.log)
