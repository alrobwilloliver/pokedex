interface PokemonResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{ type: { name: string } }>;
}

export interface Pokemon {
    pokedexId: number;
    nickname?: string;
    name: string;
    height: number;
    weight: number;
    types: Array<{ type: { name: string } }>;
}

export const parsePokemonReponse = (data: PokemonResponse): Pokemon => {
    return {
        pokedexId: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
    };
};
