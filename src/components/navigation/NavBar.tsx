import { StyledLink, StyledNavBar } from "../styles";

export const NavBar = () => {
	return (
		<StyledNavBar>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/tasks">Tasks</StyledLink>
			<StyledLink to="/projects">Projects</StyledLink>
		</StyledNavBar>
	);
};
