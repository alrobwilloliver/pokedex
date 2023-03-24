import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: false },
    pokedexId: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    types: Array,
});

export const PokemonModel = mongoose.model("Pokemon", pokemonSchema);
