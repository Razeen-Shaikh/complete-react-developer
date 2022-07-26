import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoute from "./routes/Admin";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", adminRoute);

const port = process.env.PORT || 8080;

mongoose
	.connect(`${process.env.DB_HOST_LOCAL}`)
	.then(() => {
		app.listen(port, () => {
			console.log(
				`Server and database running on port ${port}, http://localhost:${port}`
			);
		});
	})
	.catch((err) => {
		console.log(err);
	});
