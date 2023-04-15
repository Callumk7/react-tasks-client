import styled from "styled-components";
import { theme } from "./theme";

export const Heading = styled.h1`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.heading};
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const Subheading = styled.h2`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.heading};
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
	color: ${theme.colors.text};
	font-family: ${theme.fonts.primary};
	font-size: 1rem;
	margin-bottom: 1rem;
`;
