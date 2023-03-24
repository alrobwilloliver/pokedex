import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import 'express-async-errors'

import { encounter } from './routes/encounter';
import { catchPokemon } from './routes/catchPokemon';
import { pokedex } from './routes/pokedex';
import { handleError } from './middleware/handleError';

const app = express();
app.use(json());

app.use('/encounter', encounter);
app.use('/pokedex/catch', catchPokemon);
app.use('/pokedex', pokedex);

app.all('*', (req: Request, res: Response) => {
    res.status(404).send({ message: 'Not found' });
});

app.use(handleError);

app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/pokedex')
        console.log('Connected to MongoDB');
    } catch (err: any) {
        console.log(err);
        return
    }

    console.log('Listening on port 3000!');
});
