const express = require('express');
const slash = require('express-slash');
const MoviesService = require('../services/movies');

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schemas/movies.js');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');
// const { moviesMock } = require('../utils/mocks/movies.js');


function moviesApi(app) {


    // Crear el router con algunas opciones para establecer el modo estricto de ruta
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing')
    });

    app.use("/api/movies", router);

    // añadir
    app.use(slash());
    
    //nuestro servicio
    const moviesService = new MoviesService();
    
    router.get("/", async function(req,res,next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            // throw new Error('Error getting movies');
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch (err) {
            next(err);
        }
    });
    
    router.get("/:movieId", validationHandler({
        movieId: movieIdSchema
    }, 'params'), async function(req,res,next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data: movies,
                message: 'movies retrieved'
            });
        } catch (err) {
            next(err);
        }
    });
    router.post("/", validationHandler(createMovieSchema), async function(req,res,next) {
        const { body:movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie })

            res.status(201).json({
                data: createdMovieId,
                message: 'movies created'
            });
        } catch (err) {
            next(err);
        }
    });
    router.put("/:movieId",
        validationHandler({movieId: movieIdSchema}, 'params'),
        validationHandler(updateMovieSchema),
        async function(req,res,next) {
            const { body:movie } = req;
            const { movieId } = req.params;
            try {
                const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

                res.status(200).json({
                    data: updatedMovieId,
                    message: 'movies updated'
                });
            } catch (err) {
                next(err);
            }
    });
    router.patch("/:movieId",
        validationHandler({movieId: movieIdSchema}, 'params'),
        validationHandler(updateMovieSchema),
        async function(req,res,next) {
            const { body:movie } = req;
            const { movieId } = req.params;
            try {
                const partialUpdatedMovieId = await moviesService.partialUpdateMovie({ movieId, movie });
                res.status(200).json({
                    data: partialUpdatedMovieId,
                    message: 'movies updated partially'
                });
            } catch (err) {
                next(err);
            }
    });
    router.delete("/:movieId", validationHandler({movieId: movieIdSchema}, 'params'), async function(req,res,next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deletedMovieId,
                message: 'movies deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;