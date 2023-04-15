import styled from "styled-components";
import { theme } from "./theme";

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledInput = styled.input`
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid black;
`;

export const StyledButton = styled.button`
	margin: 10px;
	padding: 5px, 10px;
	border-radius: 5px;
	border: none;
	background-color: blue;
	color: white;
	font-weight: bold;
	cursor: pointer;
`;
