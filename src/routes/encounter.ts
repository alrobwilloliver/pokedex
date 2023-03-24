import { Router, Request, Response } from 'express';
import axios from 'axios';
import { parsePokemonReponse } from '../helper/parse-pokemon';

const router = Router();

export const encounter = router.get('/', async (req: Request, res: Response) => {
    const randomNum = Math.floor(Math.random() * 149) + 1;
    try {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(apiResult => {

            const pokemon = parsePokemonReponse(apiResult.data);

            res.send({ message: `A wild ${pokemon.name} appeared!`, data: pokemon, })
        });
    } catch (err: any) {
        console.log(err);
        res.status(500).send({ error: 'Something went wrong', message: err.message });
    }
});
