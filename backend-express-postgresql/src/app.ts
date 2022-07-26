import * as express from "express";

import { Request, Response } from "express";

import { Tweets } from "./entity/Tweets";

import { myDataSource } from "./app-data-source";

// establish database connection

myDataSource

	.initialize()

	.then(() => {
		console.log("Data Source has been initialized!");
	})

	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
	});

// create and setup express app

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// register CRUD routes

// CREATE

// READ

// UPDATE

// DELETE

// READ: All tweets

app.get("/tweets", async function (req: Request, res: Response) {
	const tweets = await myDataSource.getRepository(Tweets).find();

	res.json(tweets);
});

// READ: Tweet by ID

app.get("/tweets/:id", async function (req: Request, res: Response) {
	const results = await myDataSource.getRepository(Tweets).findOneBy({
		id: req.params.id,
	});

	return res.send(results);
});

// CREATE: New tweet

app.post("/tweets", async function (req: Request, res: Response) {
	const tweet = await myDataSource.getRepository(Tweets).create(req.body);

	const results = await myDataSource.getRepository(Tweets).save(tweet);

	return res.send(results);
});

// UPDATE: Tweet by ID

app.put("/tweets/:id", async function (req: Request, res: Response) {
	const tweet = await myDataSource.getRepository(Tweets).findOneBy({
		id: req.body.id,
	});

	myDataSource.getRepository(Tweets).merge(tweet, req.body);

	const results = await myDataSource.getRepository(Tweets).save(tweet);

	return res.send(results);
});

// DELETE: Tweet by ID

app.delete("/tweets/:id", async function (req: Request, res: Response) {
	const results = await myDataSource
		.getRepository(Tweets)
		.delete(req.body.id);

	return res.send(results);
});

const port = process.env.PORT || 8080;

// start express server

app.listen(port, () =>
	console.log(
		`Server and database running on port ${port}, http://localhost:${port}`
	)
);
