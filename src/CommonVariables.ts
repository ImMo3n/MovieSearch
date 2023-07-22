export enum ImageWidths {
  XS = "w92",
  S = "w154",
  M = "w185",
  L = "w342",
  XL = "w500",
  XXL = "w780",
  MAX = "original",
}

// export enum Theme {
//   light = "light",
//   dark = "dark",
// }

export const baseURL = new URL("https://api.themoviedb.org");
export const imgBaseURL = new URL("https://image.tmdb.org");

export const apiKey = "3b3bbdf674645c417d4170763501a427";

// export enum categories {
//   movie = "movie",
//   tv = "tv",
//   person = "person",
// }

// export enum categories_label {
//   movie = "Movie",
//   tv = "TV",
//   person = "Person",
// }

export const categoryOptions = [
  {
    id: "movie",
    name: "Movie",
  },
  {
    id: "tv",
    name: "TV",
  },
  {
    id: "person",
    name: "Person",
  },
];

export const TrendSortOptions = [
  {
    id: "day",
    name: "Day",
  },
  {
    id: "week",
    name: "Week",
  },
];

export const genreArray = [
  {
    value: 28,
    label: "Action",
  },
  {
    value: 12,
    label: "Adventure",
  },
  {
    value: 16,
    label: "Animation",
  },
  {
    value: 35,
    label: "Comedy",
  },
  {
    value: 80,
    label: "Crime",
  },
  {
    value: 99,
    label: "Documentary",
  },
  {
    value: 18,
    label: "Drama",
  },
  {
    value: 10751,
    label: "Family",
  },
  {
    value: 14,
    label: "Fantasy",
  },
  {
    value: 36,
    label: "History",
  },
  {
    value: 27,
    label: "Horror",
  },
  {
    value: 10402,
    label: "Music",
  },
  {
    value: 9648,
    label: "Mystery",
  },
  {
    value: 10749,
    label: "Romance",
  },
  {
    value: 878,
    label: "Science Fiction",
  },
  {
    value: 10770,
    label: "TV Movie",
  },
  {
    value: 53,
    label: "Thriller",
  },
  {
    value: 10752,
    label: "War",
  },
  {
    value: 37,
    label: "Western",
  },
  {
    value: 10759,
    label: "Action & Adventure",
  },
  {
    value: 10762,
    label: "Kvalues",
  },
  {
    value: 10763,
    label: "News",
  },
  {
    value: 10764,
    label: "Reality",
  },
  {
    value: 10765,
    label: "Sci-Fi & Fantasy",
  },
  {
    value: 10766,
    label: "Soap",
  },
  {
    value: 10767,
    label: "Talk",
  },
  {
    value: 10768,
    label: "War & Politics",
  },
];
