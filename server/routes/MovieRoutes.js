import express from 'express';
import asyncHandler from 'express-async-handler';
import Movie from '../models/movieModel.js';
import Genre from '../models/genreModel.js';
import Showing from '../models/showingModel.js';

const movieRoute = express.Router();
movieRoute.get(
    "/",
    asyncHandler(async (req,res) => {
        const movies = await Movie.find({});
        res.json(movies);
    })

);
movieRoute.get(
    "/genres",
    asyncHandler(async (req,res) => {
        const data = await Genre.find({});
        console.log(data);
        res.json(data);
    })

);
movieRoute.post(
    "/showing/add",
    asyncHandler(async (req,res) => {
        console.log(req.body);
        const showing = new Showing(req.body);
        showing.save();
        res.json(req.body);
    })

);
movieRoute.get(
    "/showing",
    asyncHandler(async (req,res) => {
        const data = await Showing.find({});
        console.log(data);
        res.json(data);
    })

);
movieRoute.get(
    "/:id",
    asyncHandler(async (req,res) => {
        const movie = await Movie.findById(req.params.id);
        if(movie){
            res.json(movie);
        } else {
            res.status(404)
            throw new Error("Movie not Found");
        }
    })
);
export default movieRoute;