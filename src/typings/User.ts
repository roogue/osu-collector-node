import { Collection, OsuWeb } from "./index";

export interface User {
  id: number;
  osuweb: OsuWeb;
  favourites?: number[];
  uploads?: number[];
}

export interface UserList {
  currentPage: number;
  perPage: number;
  nextPage: number;
  lastPage: number;
  users: User[];
}

export type UserRouteType = "uploads" | "favourites";

export interface UserRoute {
  Users: UserList;
  User: User;
  Uploads: Collection[];
  Favourites: Collection[];
}

export interface GetUserOptionsBasics {
  params?: { page?: number; perPage?: number; cursor?: number };
}

export interface GetUserOptionsWithId extends GetUserOptionsBasics {
  id: number;
  route?: UserRouteType;
}

export interface GetUserOptionsWithRoute extends GetUserOptionsBasics {
  id?: number;
  route: UserRouteType;
}

export type GetUserOptionsType = GetUserOptionsWithId | GetUserOptionsWithRoute;
