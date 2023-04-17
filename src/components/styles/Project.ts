import styled from "styled-components";
import { theme } from "./theme";

export const StyledProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.white};
	border-radius: 5px;
	margin: 10px;
	padding: 10px;
	h2 {
		font-family: ${theme.fonts.heading};
		color: ${theme.colors.primary};
	}
	p {
		font-family: ${theme.fonts.body};
		color: ${theme.colors.text};
	}
`;
