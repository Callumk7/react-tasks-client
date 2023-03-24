import React from "react";

export const Task = (props: {}) => {
	return (
		<div>
			<p>{task.name}</p>
			<p>{task.body}</p>
			<input type="checkbox"></input>
		</div>
	);
};
