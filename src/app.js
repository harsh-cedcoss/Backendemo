import express from "express";
import cors from 'cors';
import cookieParser from 'cookieParser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))      //middleware
app.use(express.urlencoded({extended: true, limit: "16kb"}))    //middleware for url
app.use(express.static("public"))       //to store images, favicon etc to public folder

app.use(cookieParser())     //to perform CRUD operations on cookies of client's browser

export { app }