import { useEffect, useState } from 'react';
import './App.css';
import CreateTodo from './CreateTodo.jsx';
import Todos from './Todos.jsx';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		async function run() {
			const res = await fetch('http://localhost:5000/todos');
			const data = await res.json();

			setTodos(data.todos);
		}
		run();
	}, [setTodos]);

	return (
		<>
			<div className='container'>
				<div className='column'>
					<CreateTodo />
				</div>
				<div className='column'>
					<Todos todos={todos} />
				</div>
			</div>
		</>
	);
}

export default App;
