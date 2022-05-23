import { request } from "../module";
import { Routes } from "../module/Routes";
import { User } from "../type";

export class Users {
  readonly cookie: string;

  constructor(cookie: string) {
    this.cookie = cookie;
  }

  async getData() {
    return (await request("get", Routes.me, { cookie: this.cookie })) as User;
  }
}
