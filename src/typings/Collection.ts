export interface BeatMap {
  checksum: string;
  id: number;
}
export interface BeatMapSet {
  beatmaps: BeatMap[];
  id: number;
}

export interface BeatMapV2 {
  cs: number;
  count_spinners: 0;
  is_scoreable: boolean;
  max_combo: number;
  mode: string;
  id: number;
  playcount: number;
  url: string;
  checksum: string;
  deleted_at: string | null;
  accuracy: number;
  hit_length: number;
  count_sliders: number;
  failtimes: {
    fail: number[];
    exit: number[];
  };
  convert: boolean;
  ar: number;
  beatmapset: BeatMapSetV2;
  ranked: number;
  mode_int: number;
  version: string;
  total_length: number;
  user_id: number;
  drain: number;
  bpm: number;
  last_updated: string;
  status: string;
  difficulty_rating: number;
  count_circles: number;
  passcount: number;
  beatmapset_id: number;
}

export interface BeatMapSetV2 {
  artist: string;
  user_id: number;
  storyboard: boolean;
  nsfw: boolean;
  is_scoreable: boolean;
  discussion_enabled: boolean;
  video: boolean;
  title_unicode: string;
  track_id: string | null;
  submitted_date: string;
  covers: {
    cover: string;
    "cover@2x": string;
    slimcover: string;
    "slimcover@2x": string;
    card: string;
    "card@2x": string;
    list: string;
    "list@2x": string;
  };
  title: string;
  discussion_locked: boolean;
  favourite_count: number;
  tags: string;
  creator: string;
  status: string;
  hype: string | null;
  play_count: number;
  nominations_summary: {
    current: number;
    required: number;
  };
  preview_url: string;
  legacy_thread_url: string;
  source: string;
  ratings: number[];
  bpm: number;
  can_be_hyped: boolean;
  id: number;
  ranked: number;
  offset: number;
  ranked_date: string;
  availability: {
    download_disabled: boolean;
    more_information: string | null;
  };
  artist_unicode: string;
  last_updated: string;
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
  unknownChecksums: string[];
  modes: Record<Modes, number>;
}

export interface RecentCollection {
  nextPageCursor: number | null;
  hasMore: boolean;
  collections: Collection[];
}

export enum TimeRange {
  "today",
  "week",
  "month",
  "alltime",
}

export type CollectionRouteType = "collection" | "recent" | "popularv2";

export interface CollectionRoute {
  Collection: Collection;
  Recent: RecentCollection;
  PopularV2: RecentCollection;
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
