export interface BeatMap {
  checksum: string;
  id: number;
}
export interface BeatMapSet {
  beatmaps: BeatMap[];
  id: number;
}

export type Modes = "taiko" | "osu" | "fruits" | "mania";

export interface Collection {
  uploader: {
    rank: number;
    username: string;
    id: number;
    avatarURL?: string;
  };
  artists: Record<string, number>;
  mappers: Record<string, number>;
  favourites: number;
  favouritedBy: number[];
  dateUploaded: {
    _seconds: number;
    _nanoseconds: number;
  };
  name: string;
  bpmSpread: Record<string, number>;
  beatmapIds: BeatMap[];
  difficultySpread: Record<string, number>;
  description: string;
  beatmapsets: BeatMapSet[];
  beatmapCount: number;
  id: number;
  dateLastModified: {
    _seconds: number;
    _nanoseconds: number;
  };
  unsubmittedBeatmapCount: number;
  // ! More Info needed
  unknownChecksums: string[];
  modes: Record<Modes, number>;
}

export interface Recent {
  nextPageCursor: number;
  hasMore: boolean;
  collections: Collection[];
}

export interface Popular extends Recent {}

export enum TimeRange {
  "today",
  "week",
  "month",
  "alltime",
}

export type CollectionRouteType = "collection" | "recent" | "popularv2";

export interface CollectionRoute {
  Collection: Collection;
  Recent: Recent;
  PopularV2: Popular;
}

export interface GetCollectionOptionsBasics {
  params?: {
    page?: number;
    perPage?: number;
    cursor?: number;
    range?: TimeRange;
  };
}

export interface GetCollectionOptionsWithId extends GetCollectionOptionsBasics {
  id: number;
  route?: CollectionRouteType;
}

export interface GetCollectionOptionsWithRoute
  extends GetCollectionOptionsBasics {
  id?: number;
  route: CollectionRouteType;
}

export type GetCollectionOptionsType =
  | GetCollectionOptionsWithId
  | GetCollectionOptionsWithRoute;
