export type MovieObject = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShowObject = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type PersonObject = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: MovieObject[];
};

export type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieCredits = {
  cast: PersonObject[];
  crew: PersonObject[];
  id: number;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | number;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShowDetails = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number | null;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type Trailers = {
  id: number;
  results: Video[];
};

export enum TrendSort {
  day = "day",
  week = "week",
}
export enum TrendSortLabel {
  day = "Day",
  week = "Week",
}
export type TrendType = {
  id: TrendSort;
  name: TrendSortLabel;
};

export enum categories {
  movie = "movie",
  tv = "tv",
  person = "person",
}
export enum categoryLabel {
  movie = "Movie",
  tv = "TV",
  person = "Person",
}
type category = {
  id: categories;
  name: categoryLabel;
};
export type categoryTypes = Array<category>;

export type ModalType = {
  category: categories;
  id: number;
};

export type PersonDetails = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string | null;
};

type Response<MediaType> = {
  status: string;
  fetchStatus: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isInitialLoading: boolean;
  data: {
    data: MediaType;
    pages: {
      data: MediaType;
    };
    status: number;
    statusText: string;
    headers: unknown;
    config: unknown;
  };
  dataUpdatedAt: number;
  error: string;
  errorUpdatedAt: number;
  failureCount: number;
  failureReason: null;
  errorUpdateCount: number;
  isFetched: boolean;
  isFetchedAfterMount: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isLoadingError: boolean;
  isPaused: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isStale: boolean;
};

type PagesResponse<MediaType> = {
  status: string;
  fetchStatus: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isInitialLoading: boolean;
  data: {
    pages: [
      {
        data: {
          page: number;
          results: Array<MediaType>;
          total_pages: number;
          total_results: number;
        };
        status: number;
        statusText: string;
        headers: unknown;
        config: unknown;
        request: unknown;
      }
    ];
    pageParams: [number | undefined];
  };
  dataUpdatedAt: number;
  error: string;
  errorUpdatedAt: number;
  failureCount: number;
  failureReason: string;
  errorUpdateCount: number;
  isFetched: boolean;
  isFetchedAfterMount: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isLoadingError: boolean;
  isPaused: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isStale: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isFetchingPreviousPage: boolean;
  fetchNextPage: () => void;
};

type SocialMediaInfo = {
  id: number;
  freebase_mid?: string | null;
  freebase_id?: string | null;
  imdb_id?: string | null;
  tvrage_id?: string | null;
  wikidata_id?: string | null;
  facebook_id?: string | null;
  instagram_id?: string | null;
  tiktok_id?: string | null;
  twitter_id?: string | null;
  youtube_id?: string | null;
};

export type MovieResponse = Response<MovieObject>;
export type TVResponse = Response<TVShowObject>;
export type PersonResponse = Response<PersonObject>;

export type MoviePagesResponse = PagesResponse<MovieObject>;
export type TVPagesResponse = PagesResponse<TVShowObject>;
export type PersonPagesResponse = PagesResponse<PersonObject>;
export type QueryResultPagesType =
  | MoviePagesResponse
  | TVPagesResponse
  | PersonPagesResponse;

export type MovieDetailsResponse = Response<MovieDetails>;
export type TVDetailsResponse = Response<TVShowDetails>;
export type PersonDetailsResponse = Response<PersonDetails>;

export type TrailerResponse = Response<Trailers>;
export type MovieCreditsResponse = Response<MovieCredits>;
export type SocialMediaResponse = Response<SocialMediaInfo>;
