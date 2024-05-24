export enum SearchType {
    "all" = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export type DetailResult = {
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
export type SearchResult = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export type SearchError = {
    Response: string;
    Error: string;
}

export const useApi = (() => {
    let url = 'https://www.omdbapi.com/'
    let apiKey = '33ab72be'

    const searchData = async (title: string, type: SearchType): Promise <SearchResult[] | SearchError> => {
        const result = await fetch(
            `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`
        )
        return result.json()
    }

    const getDetails = async (id: string): Promise<DetailResult> => {
        const result = await fetch(
            `${url}?i=${id}&plot=full&apikey=${apiKey}`
        )
        return result.json()
    }
    return {
        searchData,
        getDetails
    }
})