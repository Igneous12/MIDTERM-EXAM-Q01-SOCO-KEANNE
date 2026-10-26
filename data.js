const express = require("express");

const app = express();

const PORT = 3000;

const pokemons = [
    {
        id: 1,
        pokemon: "Bulbasaur",
        region: "Kanto"
    },
    {
        id: 2,
        pokemon: "Squirtle",
        region: "Kanto"
    },
    {
        id: 3,
        pokemon: "Charmander",
        region: "Kanto"
    }
];


app.get("/api/pokemons", (req, res) => {
    res.json(pokemons);
});


app.get("/api/pokemons/:id", (req, res) => {
    const id = Number(req.params.id);
    const pokemon = pokemons.find(pokemon =>
        pokemon.id == id
    );

    if (!pokemon) {
        return res.status(404).json({
            message: "Pokemon not found"
        });
    }

    res.json(pokemon);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});