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
  banner: string;
}

export interface RecentTournament {
  nextPageCursor: number | null;
  hasMore: boolean;
  tournaments: Tournament[];
}
