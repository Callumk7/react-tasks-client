import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: ${theme.colors.background};
`;
