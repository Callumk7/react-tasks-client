import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="navbar bg-primary">
			<Link className="btn-ghost btn p-4 text-lg font-bold" to={"/"}>
				Home
			</Link>
			<Link className="btn-ghost btn p-4 text-lg font-bold" to={"/tasks"}>
				Tasks
			</Link>
			<Link className="btn-ghost btn p-4 text-lg font-bold" to={"/projects"}>
				Projects
			</Link>
		</div>
	);
};
