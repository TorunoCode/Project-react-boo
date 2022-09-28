import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { movies } from './data/movies.js';
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import movieRoute from './routes/MovieRoutes.js';
import { errorHandler, notFound } from './Middleware/errors.js';
dotenv.config();
connectDatabase();
const app = express();
// API
app.use("/api/import",ImportData);
app.use("/api/movies",movieRoute);
app.use(notFound);
app.use(errorHandler);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.get("/api/movies",(req,res) => {
    res.json(movies);

});
app.get("/api/movies/:id",(req,res) => {
    const movie = movies.find((p)=> p.id == req.params.id);
    res.json(movie);
});
app.get("/",(req,res) => {
    res.send("API is running.....");
});
app.listen(PORT,()=>{console.log(`server is running ${PORT}`);})