import mongoose from 'mongoose';
import { boolean } from 'zod';

mongoose.connect(
	'mongodb+srv://aashish:rasberryPie@cluster0.nziiui6.mongodb.net/cohort'
);

const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const Todos = mongoose.model('Todo', todoSchema);

export default Todos
