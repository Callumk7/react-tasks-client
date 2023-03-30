import styled from "styled-components";

interface StyledButtonProps {
	warning?: boolean;
	confirmation?: boolean;
	primary?: boolean;
	secondary?: boolean;
}

function Style(props: StyledButtonProps) {
	if (props.warning) {
		return {
			backgroundColor: "#ff9800",
			color: "#fff",
		};
	} else if (props.confirmation) {
		return {
			backgroundColor: "#4caf50",
			color: "#fff",
		};
	} else if (props.primary) {
		return {
			backgroundColor: "#2196f3",
			color: "#fff",
		};
	} else if (props.secondary) {
		return {
			backgroundColor: "#f44336",
			color: "#fff",
		};
	} else {
		return null;
	}
}

export const StyledButton = styled.button<StyledButtonProps>`
	/* Base styles */
	padding: 8px 16px;
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;

	/* Variations based on props */
	${(props) => Style(props)}
`;
