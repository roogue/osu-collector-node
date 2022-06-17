import { BeatMapV2Basic } from "./Collection";

export interface Mod {
  mod: "NM" | "HR" | "DT" | "FM" | "TB" | "HD";
  maps: BeatMapV2Basic[];
}

export interface Round {
  round:
    | "qualifiers"
    | "round of 24"
    | "round of 16"
    | "quarterfinals"
    | "semifinals"
    | "finals"
    | "grand finals";
  mods: Mod[];
}

export interface Tournament {
  dateModified: {
    _seconds: number;
    _nanoseconds: number;
  };
  unknownIds: number[];
  description: string;
  link: string;
  dateUploaded: {
    _seconds: number;
    _nanoseconds: number;
  };
  id: number;
  uploader: {
    username: string;
    id: number;
  };
  name: string;
  organizers: {
    id: number;
    username: string;
  }[];
  organizerIds: number[];
  banner: string;
  rounds?: Round[];
}

export interface RecentTournament {
  nextPageCursor: number | null;
  hasMore: boolean;
  tournaments: Tournament[];
}
