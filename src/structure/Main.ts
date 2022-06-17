import {
  Metadata,
  CollectionRoute,
  UserRoute,
  GetUserOptionsType,
  GetCollectionOptionsType,
  TimeRange,
  SortBy,
} from "../typings";
import { Routes } from "./Routes";
import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { GetMeOptionsType, MeRoute } from "src/typings/Me";

export class OsuCollectorNode {
  cookie?: string;

  /**
   * @function setCookie
   * @param cookie You should able to get from Request Headers after login
   * @returns {this} this class
   */
  setCookie(cookie: string): this {
    this.cookie = cookie;
    return this;
  }

  /**
   * Get current cookie's user
   * @function getUserMe
   * @param {GetMeOptionsType} options Options for different type of data to be fetched
   * @returns {Promise<MeRoute[K] | null>} Current logged in user data
   */
  async getUserMe<K extends keyof MeRoute>(
    options?: GetMeOptionsType
  ): Promise<MeRoute[K] | null> {
    if (!this.cookie) throw new Error("Cookie is not set");
    const { route } = { ...options } as GetMeOptionsType;
    const path = route ? Routes.me({ route }) : Routes.me();
    const res = await this.request("get", path, { cookie: this.cookie });
    return res.status === 200 ? (res.data as MeRoute[K]) : null;
  }

  /**
   * Get user's data with id
   * @function getUser
   * @param {GetUserOptionsType} options Options for different type of data to be fetched
   * @returns {Promise<UserRoute[K] | null>} User list or User data
   */
  async getUser<K extends keyof UserRoute>(
    options?: GetUserOptionsType
  ): Promise<UserRoute[K] | null> {
    const { id, params, route } = { ...options } as GetUserOptionsType;
    const { page = 1, perPage = 50, cursor = 1 } = { ...params };
    const path = id ? Routes.getUser(id, { route }) : Routes.userList;
    const data = {
      page: page.toString(),
      perPage: perPage.toString(),
      cursor: cursor.toString(),
    };
    const res = await this.request("get", path, { cookie: this.cookie, data });
    return res.status === 200 ? (res.data as UserRoute[K]) : null;
  }

  /**
   * Get osu!collector's metadata
   * @function getMetadata
   * @returns {Promise<Metadata | null>}
   */
  async getMetadata(): Promise<Metadata | null> {
    const path = Routes.metadata;
    const res = await this.request("get", path);
    return res.status === 200 ? (res.data as Metadata) : null;
  }

  /**
   * Get collection's data with id
   * @function getCollection
   * @param {GetCollectionOptionsType} options Options for different type of data to be fetched
   * @returns {Promise<CollectionRoute[K] | null>}
   */
  async getCollection<K extends keyof CollectionRoute>(
    options?: GetCollectionOptionsType
  ): Promise<CollectionRoute[K] | null> {
    const { id, route, params } = {
      ...options,
    } as GetCollectionOptionsType;
    if (!id && !route) throw new Error("An Id or a Route is required");

    const {
      page = 1,
      perPage = 50,
      cursor = 1,
      range = TimeRange.AllTime,
      sortBy = SortBy.Artist,
      orderBy = "asc",
    } = { ...params };

    const path = Routes.getCollection({ id, route });

    const data = {
      page: page.toString(),
      perPage: perPage.toString(),
      cursor: cursor.toString(),
      range,
      sortBy,
      orderBy,
    };

    const res = await this.request("get", path, { data, cookie: this.cookie });
    return res.status === 200 ? (res.data as CollectionRoute[K]) : null;
  }

  /**
   * Use axios to make request
   * @param {Method} method HTTP method
   * @param {Routes} path Path
   * @param options Data to be sent
   * @returns {AxiosResponse} Axios response
   */
  private async request(
    method: Method,
    path: Routes,
    options: {
      data?: Record<string, string>;
      cookie?: string;
    } = {}
  ): Promise<AxiosResponse<Record<string, any>>> {
    let body, query;
    const { data, cookie = "" } = options;
    method.toLocaleLowerCase() === "get" ? (query = data) : (body = data);

    const res = (await axios({
      method,
      url: `${Routes.apiBaseUrl}${path}`,
      data: body,
      params: query,
      headers: {
        Cookie: cookie,
      },
    }).catch((err) => err)) as AxiosError | AxiosResponse<Record<string, any>>;

    if (res instanceof AxiosError) throw new Error(res.message);

    return res;
  }
}
