import cors from 'cors';
import express from 'express';
import Todos from './db.js';
import { createTodo, updateTodo } from './types.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
	const reqPayload = req.body;
	const parsed = createTodo.safeParse(reqPayload);
	if (!parsed.success) {
		res.status(411).json({
			msg: 'you sent the wrong inputs',
			parsed,
		});
		return;
	}

	const todo = await Todos.create({
		title: reqPayload.title,
		description: reqPayload.description,
		completed: false,
	});

	res.status(200).json({
		msg: todo,
	});
});

app.get('/todos', async (req, res) => {
	const todos = await Todos.find({});

	res.status(200).json({
		todos,
	});
});

app.put('/completed', async (req, res) => {
	const reqPayload = req.body;
	const parsed = updateTodo.safeParse(reqPayload);

	if (!parsed.success) {
		res.status(411).json({
			msg: 'you sent the wrong inputs',
		});
		return;
	}

	const updatedTodo = await Todos.updateOne(
		{ _id: req.body.id },
		{ completed: true }
	);

	if (updatedTodo)
		res.status(200).json({
			data: updatedTodo,
		});
});

app.listen(5000, () => console.log('app is running at 5000'));
