export enum SerachType {
    "all"= '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export interface DetailResult {
    Genre: string
    Title: string
    Year: string
    Poster: string
    Plot: string
    imdbRating: string
    Director: string
    Actors: string
    Website: string
}