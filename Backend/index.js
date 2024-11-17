import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
// const frontendURL = process.env.FRONTEND_URL;  // กำหนด URL ของ Frontend

// dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());
// app.use(cors({
//     origin: frontendURL,
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
// }));

app.get("/", (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome to my website");
});
