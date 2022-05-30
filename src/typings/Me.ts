import { User } from "./User";

export interface Me {
  loggedIn: boolean;
  user: User | null;
  paidFeaturesAccess: boolean;
}

export interface TwitchSub {
  isSubbedToFunOrange: boolean;
}

export type MeRouteType = "twitchSub";

export interface MeRoute {
  Me: Me;
  TwitchSub: TwitchSub;
}

export interface GetMeOptions {
  route?: MeRouteType;
}

export type GetMeOptionsType = GetMeOptions;
