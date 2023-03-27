import { QueryFilter } from './filter-pokedex';

export const queryBuilder = (query: QueryFilter): {} => {
    let result: { [key: string]: { $in: string[] }} = {};
    const queryFilter = query as QueryFilter;
    if (queryFilter.types) {
        const types = queryFilter.types.split(',');
        result = { 'types.type.name': { '$in': types } };
    }
    return result;
};
