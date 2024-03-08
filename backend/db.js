import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

mongoose.connect(
	`mongodb+srv://aashish:${process.env.password}@cluster0.nziiui6.mongodb.net/cohort`
);

console.log(process.env);
const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const Todos = mongoose.model('Todo', todoSchema);

export default Todos;
