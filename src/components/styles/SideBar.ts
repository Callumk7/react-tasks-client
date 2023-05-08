import styled from "styled-components";
import { theme } from "./theme";

export const StyledSideBar = styled.div`
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
`;
