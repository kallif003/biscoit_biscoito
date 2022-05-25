import styled from "styled-components"

export const ContainerLogo = styled.div`
	width: 100vw;
	height: 30rem;
	background-image: url("https://user-images.githubusercontent.com/66094168/169713572-527a79f6-0d70-42d8-a367-221fe5aea194.png");
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 6rem 5rem 0 5rem;
	@media (min-width: 0px) and (max-width: 767px) {
		height: 20rem;
	}
`

export const DivTextLogo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	line-height: 3.5rem;
	@media (min-width: 0px) and (max-width: 767px) {
		line-height: 2.5rem;
		width: auto;
		align-items: center;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		line-height: 3.5rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
export const DivSubtitle = styled.div`
	background: #fff;
	border-radius: 0.5rem;
	width: 24rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	margin-top: 0.25rem;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 100%;
		margin-top: 0;
	}
`
