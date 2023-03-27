import { Pokemon } from "./parse-pokemon";

export type QueryFilter = {
    types?: string;
    limit?: string;
    offset?: string;
}

export const filterPokedex = (filterParam: QueryFilter, data: Pokemon[]): Pokemon[] => {
    let result: Pokemon[] = data;
    if (typeof filterParam.types === 'string') {
        result = result.filter((pokemon) => {
            const types = pokemon.types.map((typeArr) => typeArr.type.name);
            const allQueryTypes = filterParam.types?.split(',');
            return allQueryTypes?.some((type) => types.includes(type));
        })
    }

    if (filterParam.limit && filterParam.offset) {
        const limit = parseInt(filterParam.limit);
        const offset = parseInt(filterParam.offset);
        result = result.slice(offset, offset + limit);
    }

    return result;
}
