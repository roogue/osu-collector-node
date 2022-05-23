export class Routes {
  static readonly #baseUrl = "https://osucollector.com/api/";

  static get apiEndPoint() {
    return this.#baseUrl;
  }

  static get users() {
    return "users/";
  }

  static get me() {
    return "users/me";
  }
}
