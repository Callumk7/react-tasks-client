import styled from "styled-components";
import { theme } from "./theme";

export const StyledTask = styled.div`
	background-color: ${theme.colors.quaternary};
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	position: relative;
`;

export const StyledTaskTitle = styled.h2`
	font-family: ${theme.fonts.primary};
	font-size: 1.5rem;
	margin-bottom: 5px;
	color: ${theme.colors.primary};
`;

export const StyledTaskBody = styled.p`
	font-family: ${theme.fonts.primary};
	font-size: 1rem;
	color: ${theme.colors.secondary};
	margin-bottom: 10px;
`;

export const StyledTaskCheckbox = styled.input`
	position: absolute;
	top: 10px;
	right: 10px;
`;
