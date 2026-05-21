import './App.css'
import {fetchPokemons, type IResult} from "./api.ts";
import {useEffect, useState} from "react";

// TODO: сделать вывод покемонов 4 шт, кнопку подгрузки ещё
/*
    1) вывод списка
    2) надпись показывает 4 из N шт
    3) кнопку Load more - чтоб подгружать ещё

*/


function App() {
    const [showNumber, setShowNumber] = useState(4)
    const [pokemonsData, setPokemonsData] = useState<IResult | null>(null)

    const handleSearch = async (count: number) => {
        try {

            const data = await fetchPokemons(count)
            setPokemonsData(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleShowMore = () => {
        const newCount = showNumber + 4
        setShowNumber(newCount)
        void handleSearch(newCount)
    }

    useEffect(() => {
        void handleSearch(showNumber)
    }, []);

    return (
        <>
            <section id="top">
                <div>
                    <h1>Pokemons</h1>
                    <ul>
                        {pokemonsData?.results.map((pokemon, i) => (
                            <li key={i}>
                                {pokemon.name}
                            </li>
                        ))}
                    </ul>
                    <div>
                        Displaying {showNumber} of {pokemonsData?.count} results
                    </div>
                    <button onClick={handleShowMore}>Load more</button>
                </div>
            </section>
        </>
    )
}

export default App
