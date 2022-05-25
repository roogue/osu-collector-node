import { UserRouteType, CollectionRouteType } from "../typings";

export class Routes {
  static readonly #baseUrl = "https://osucollector.com/api/";
  static readonly #endPoint = {
    users: "users/",
    me: "me/",
    metadata: "metadata/",
    collections: "collections/",
  };

  static get apiBaseUrl() {
    return this.#baseUrl;
  }

  static get userList() {
    return this.#endPoint.users;
  }

  static getUser(id: number, option: { route?: UserRouteType } = {}) {
    return `${this.#endPoint.users}${id}/${option.route ?? ""}`;
  }

  static get me() {
    return this.#endPoint.me;
  }

  static get metadata() {
    return this.#endPoint.metadata;
  }

  static getCollection(options: { id?: number; route?: CollectionRouteType } = {}) {
    const { id, route } = options;
    return `${this.#endPoint.collections}${id ?? route ?? ""}`;
  }
}
