import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./theme";

export const StyledNavBar = styled.nav`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	height: 90px;
	font-size: 1.5rem;
	font-weight: 700;
	font-family: ${theme.fonts.primary};
`;

export const StyledLink = styled(Link)`
	color: ${theme.colors.accent};
	padding: 1rem;
`;
