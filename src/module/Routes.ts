export type UserRoute = "uploads" | "favourites";

export class Routes {
  static readonly #baseUrl = "https://osucollector.com/api/";

  static get apiEndPoint() {
    return this.#baseUrl;
  }

  static get userList() {
    return "users/";
  }

  static getUser(id: number, option: { route?: UserRoute } = {}) {
    return `users/${id}/${option.route ?? ""}`;
  }

  static get me() {
    return "users/me";
  }

  static get metadata() {
    return "metadata/";
  }

  static getCollection(id: number) {
    return `collections/${id}`;
  }
}
