import styled from "styled-components";
import { theme } from "./theme";

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.muted};
	border-radius: 5px;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	padding: 10px;
`;

export const StyledInput = styled.input`
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid black;
`;
