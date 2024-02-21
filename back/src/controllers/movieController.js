const { getMovies, addMovies } = require("../services/movieService.js");


module.exports = {
    getMovies: async (req, rest) => {
        try {
            const movies = await getMovies();
            rest.status(200).json(movies);
        } catch (error) {
            rest.status(500).json({message: "error"})
        }
    },

    addMovies: async (req, res) => {
        try {
            const movie = await addMovies(req.body);
            res.status(201).send({ message: 'Envío realizado', movie });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}


// const getMovies = async (req, res) => {
//     try {
//         const movies = await getMovies();
//         res.send("Proximamente estará disponibles las peliculas");
//     } catch (error) {
        
//     }

// };

// module.exports = { getMovies };