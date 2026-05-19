import './App.css'
import {fetchMovie, type IMovie} from "./api.ts";
import {useState, type ChangeEvent} from "react";

// TODO: сделать вывод 10 статей из hacker news
/*
    1) сделать строку поиска
    2) сделать карточки
    3) подключиться к апи
    4) вывод данных

*/


function App() {
    const [search, setSearch] = useState('Amelie')
    const [movies, setMovies] = useState<IMovie[]>([])

    const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await fetchMovie(search)
            setMovies(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <section id="top">
                <div>
                    <h1>Movie Search</h1>
                    <div>
                        <h3>Search panel</h3>
                        <div>
                            <form onSubmit={handleSearch}>
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    {movies && movies.map((movie) => (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <img
                                src={
                                    movie.poster_path ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : "https://placehold.co/400x600"
                                }
                                alt="Movie poster"
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default App
