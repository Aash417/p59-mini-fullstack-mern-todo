function Todos({ todos }) {
	return (
		<div>
			{todos.map((t) => {
				return (
					<div key={t.title}>
						<p>{t.title}</p>
						<p>{t.description}</p>
						<button>
							{t.completed == true ? 'completed' : 'mark as done'}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default Todos;
