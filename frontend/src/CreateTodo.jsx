import { useState } from 'react';

function CreateTodo() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const apiUrl = 'http://localhost:5000/todo';

	const data = {
		title,
		description,
	};
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	const handleSubmit = async () => {
		// fetch(apiUrl, requestOptions)
		// 	.then((response) => {
		// 		if (!response.ok) {
		// 			throw new Error(`HTTP error! Status: ${response.status}`);
		// 		}
		// 		return response.json(); // Parse the JSON response
		// 	})
		// 	.then((data) => {
		// 		console.log('Success:', data);
		// 		// Handle the response data as needed
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 		// Handle errors
		// 	});

		try {
			// Make the Fetch request
			const response = await fetch(apiUrl, requestOptions);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// Parse the JSON response
			const responseData = await response.json();
			setTitle('');
			setDescription('');
			alert('todo created');
			console.log('Success:', responseData);
			// Handle the response data as needed
		} catch (error) {
			console.error('Error:', error);
			// Handle errors
		}
	};

	return (
		<>
			<input
				type='text'
				placeholder='title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<input
				type='text'
				placeholder='description'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<button onClick={handleSubmit}>create Todo</button>
		</>
	);
}

export default CreateTodo;
