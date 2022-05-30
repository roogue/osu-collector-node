import { MeRouteType } from "src/typings/Me";
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

  static me(option: { route?: MeRouteType } = {}) {
    const { route = "" } = option;
    return `${this.#endPoint.users}${this.#endPoint.me}${route}`;
  }

  static get metadata() {
    return this.#endPoint.metadata;
  }

  static getCollection(
    options: { id?: number; route?: CollectionRouteType } = {}
  ) {
    const { id, route } = options;
    return `${this.#endPoint.collections}${id || route || ""}`;
  }
}
