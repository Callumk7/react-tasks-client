import styled from "styled-components";
import { theme } from "./theme";

export const PrimaryButton = styled.button`
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 12px;
	margin: 8px;
`;

export const WarningButton = styled.button`
	background-color: ${theme.colors.warning};
	color: ${theme.colors.white};
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 12px;
	margin: 8px;
`;
