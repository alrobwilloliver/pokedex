import { Router, Request, Response } from 'express';

import { PokemonModel } from '../model/pokemon';

const router = Router();

export const pokedex = router.get('/', async (req: Request, res: Response) => {
    try {
        const pokemon = await PokemonModel.find().sort({ pokedexId: 1 })
        res.send({ message: 'Your pokedex', data: pokemon });
    } catch (err: any) {
        console.log(err);
        res.status(500).send({ error: 'Something went wrong', message: err.message });
    }
})
