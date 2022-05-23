import { Users } from "../structure";

const cookie =
  "";

const UserInstance = new Users(cookie);

UserInstance.getData().then(console.log).catch(console.error);
