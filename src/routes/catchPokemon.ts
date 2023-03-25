
import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { Pokemon } from '../helper/parse-pokemon';

import { PokemonModel } from '../model/pokemon';
import { CustomValidationError } from '../errors/validation-error';

const router = Router();

export const catchPokemon = router.post('/', 
    body('name').isString().notEmpty(),
    body('nickname').isString().optional(),
    body('pokedexId').isInt().notEmpty(),
    body('height').isInt().notEmpty(),
    body('weight').isInt().notEmpty(),
    body('types').isArray().notEmpty(),
    async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new CustomValidationError(errors.array());
    }
    
    const pokemon: Pokemon = req.body;
    const existingPokemon = await PokemonModel.findOne({ name: pokemon.name });
    if (existingPokemon) {
        res.status(400).send({ message: `You already caught ${pokemon.name}!`, data: pokemon });
        return
    }

    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum > 50) {
        try {
            const pokemonInstance = new PokemonModel(pokemon);
            await pokemonInstance.save();
        } catch (err: any) {
            res.status(500).send({ error: 'Something went wrong', message: err.message });
            return
        }
        res.send({ message: `You caught ${pokemon.nickname ? pokemon.nickname : pokemon.name}! Congratulations!`, data: pokemon, });
    } else {
        res.send({ message: `You failed to catch ${pokemon.name}!`, data: pokemon, });
    }
});
