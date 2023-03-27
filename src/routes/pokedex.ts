import { Router, Request, Response } from 'express';

// import { filterPokedex, QueryFilter } from '../helper/filter-pokedex';
import { queryBuilder } from '../helper/query-builder';

import { PokemonModel } from '../model/pokemon';

const router = Router();

export const pokedex = router.get('/', async (req: Request, res: Response) => {
    try {
        let { limit, offset } = req.query;
        if (!limit || typeof limit !== 'string') {
            limit = '20';
        }
        if (!offset || typeof offset !== 'string') {
            offset = '0';
        }

        const query = queryBuilder(req.query);
        const filteredPokedex = await PokemonModel.find(query).limit(parseInt(limit)).skip(parseInt(offset));

        // const queryFilter = req.query as QueryFilter;
        // const filteredPokedex = filterPokedex(queryFilter, pokemon);
        res.send({ message: 'Your pokedex', data: filteredPokedex });
    } catch (err: any) {
        console.log(err);
        res.status(500).send({ error: 'Something went wrong', message: err.message });
    }
})
