import {
  UserType,
  MetadataType,
  UploadType,
  FavouriteType,
  Users,
  Me,
  CollectionType,
} from "../type";
import { Routes, request } from "../module/index";

export class OsuCollectorNode {
  cookie: string | null = null;

  /**
   * @function setCookie
   * @param cookie You should able to get from Request Headers after login
   * @returns {this}
   */
  setCookie(cookie: string): this {
    this.cookie = cookie;
    return this;
  }

  /**
   * Get current cookie's user
   * @function getUserMe
   * @returns {Promise<Me | null>}
   */
  async getUserMe(): Promise<Me | null> {
    if (!this.cookie) throw new Error("Cookie is not set");
    const path = Routes.me;
    const res = await request("get", path, { cookie: this.cookie });
    return res.status === 200 ? (res.data as Me) : null;
  }

  /**
   * Get user's data with id
   * @function getUser
   * @param id User's Id
   * @returns {Promise<UserType | null>}
   */
  async getUser(id: number): Promise<UserType | null> {
    const path = Routes.getUser(id);
    const res = await request("get", path);
    return res.status === 200 ? (res.data as UserType) : null;
  }

  /**
   * Get user's uploads
   * @function getUserUploads
   * @param id User's Id
   * @returns {Promise<UploadType | null>}
   */
  async getUserUploads(id: number): Promise<UploadType | null> {
    const path = Routes.getUser(id, { route: "uploads" });
    const res = await request("get", path);
    return res.status === 200 ? (res.data as UploadType) : null;
  }

  /**
   * Get user's favourite collections
   * @function getUserFavourite
   * @param id User's Id
   * @returns {Promise<FavouriteType | null>}
   */
  async getUserFavourites(id: number): Promise<FavouriteType | null> {
    const path = Routes.getUser(id, { route: "favourites" });
    const res = await request("get", path);
    return res.status === 200 ? (res.data as FavouriteType) : null;
  }

  /**
   * Get users list
   * @function getUserList
   * @returns {Promise<Users | null>}
   */
  async getUserList(): Promise<Users | null> {
    const path = Routes.userList;
    const res = await request("get", path);
    return res.status === 200 ? (res.data as Users) : null;
  }

  /**
   * Get osu!collector's metadata
   * @function getMetadata
   * @returns {Promise<MetadataType | null>}
   */
  async getMetaData(): Promise<MetadataType | null> {
    const path = Routes.metadata;
    const res = await request("get", path);
    return res.status === 200 ? (res.data as MetadataType) : null;
  }

  /**
   * Get collection's data with id
   * @function getCollection
   * @param id Collection's id
   * @returns {Promise<CollectionType | null>}
   */
  async getCollection(id: number): Promise<CollectionType | null> {
    const path = Routes.getCollection(id);
    const res = await request("get", path);
    return res.status === 200 ? (res.data as CollectionType) : null;
  }
}
