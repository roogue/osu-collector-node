import { UserType, IdUserType, MetadataType, UploadType } from "../type";
import { Routes, request, UserRoute } from "../module/index";

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
   * @returns {Promise<UserType | null>}
   */
  async getUserMe(): Promise<UserType | null> {
    if (!this.cookie) throw new Error("Cookie is not set");
    const path = Routes.me;
    const res = await request("get", path, { cookie: this.cookie });
    return res.status === 200 ? (res.data as UserType) : null;
  }

  /**
   * Get user's data with id
   * @function getUser
   * @param id User's Id
   * @returns {Promise<IdUserType | null>}
   */
  async getUser(id: number): Promise<IdUserType | null> {
    const path = Routes.getUser(id);
    const res = await request("get", path);
    return res.status === 200 ? (res.data as IdUserType) : null;
  }

  async getUserUploads(id: number): Promise<UploadType | null> {
    const path = Routes.getUser(id, { route: "uploads" });
    const res = await request("get", path);
    return res.status === 200 ? (res.data as UploadType) : null;
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
}
