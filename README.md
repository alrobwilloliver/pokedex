# Pokedex API
You first encounter a pokemon. You then have the opportunity to catch it. By capturing it, this adds this information to your pokedex. You can then view your pokedex and see all the pokemon you have caught.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development.
```
docker-compose up -d
npm run start
```

## Curl Commands
Encounter a pokemon
```
curl localhost:3000/encounter 
```

Catch a pokemon
```
curl -X POST -H 'Content-Type: application/json' -d '{ "pokedexId": 114, "name": "tangela", "weight": 350, "height": 10, "types": ["test"]}' localhost:3000/pokedex/catch
```

View your pokedex
```
curl localhost:3000/pokedex
```

### Todo
- [ ] Add tests
- [ ] Standardize error handling
- [ ] Add more typesafety to mongoose
- [ ] Add more typesafety to express
- [ ] Add authorization
