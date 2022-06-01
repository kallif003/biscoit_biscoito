import styled from "styled-components"

export const Ancora = styled.a`
	text-decoration-line: none;
	font-weight: bold;
	color: #9a9a9a;

	:active {
		transform: scale(0.9);
	}
`
export const ButtonsMyWorks = styled.button`
	background: #fff;
	border-color: #ddd;
	border-width: 1px;
	width: 8rem;
	height: 4rem;
	margin-bottom: 1.25rem;
	border-radius: 0.375rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #cacaca;
	:hover {
		background: #ebcd50;
		color: #fff;
		border-color: #fff;
		border-width: 1px;
	}
	:active {
		transform: scale(0.9);
	}
	@media (min-width: 0px) and (max-width: 767px) {
		width: 5rem;
	}
`
export const InstagramButton = styled.button`
	width: 15rem;
	height: 3rem;
	color: #7a7a7a;
	background: #f1c50e;
	border-radius: 0.5rem;
	font-weight: bold;
	font-size: 1.1rem;
	:active {
		transform: scale(0.9);
	}
`
