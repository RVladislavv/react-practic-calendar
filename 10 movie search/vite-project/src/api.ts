export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: string;
    vote_average: number;
    vote_count: number;
}

interface IMovies {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number
}

export const fetchMovie = async (searchText: string): Promise<IMovies> => {
    const params = new URLSearchParams({
        query: searchText,
    });
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?${params.toString()}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
    });
    if(!response.ok) {
        throw new Error('Problems with fetch movies')
    }
    return response.json()
}