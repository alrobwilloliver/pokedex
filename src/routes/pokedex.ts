import { Router, Request, Response } from 'express';

import { filterPokedex, QueryFilter } from '../helper/filter-pokedex';

import { PokemonModel } from '../model/pokemon';

const router = Router();

export const pokedex = router.get('/', async (req: Request, res: Response) => {
    try {
        const pokemon = await PokemonModel.find().sort({ pokedexId: 1 })
        const queryFilter = req.query as QueryFilter;
        const filteredPokedex = filterPokedex(queryFilter, pokemon);
        res.send({ message: 'Your pokedex', data: filteredPokedex });
    } catch (err: any) {
        console.log(err);
        res.status(500).send({ error: 'Something went wrong', message: err.message });
    }
})
