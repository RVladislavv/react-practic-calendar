export interface IPokemon {
    name: string;
    url: string;
}

export interface IResult {
    count: number;
    next: string;
    previous: null;
    results: IPokemon[]
}

export const fetchPokemons = async (value = 5): Promise<IResult> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${value}`);
    if(!response.ok) {
        throw new Error('Problems with fetch movies')
    }
    return response.json()
}