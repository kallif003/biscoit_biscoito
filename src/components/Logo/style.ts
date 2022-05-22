import styled from "styled-components"

export const ContainerLogo = styled.div`
	width: 100vw;
	height: 30rem;
	background-image: url("https://user-images.githubusercontent.com/66094168/169706372-073ec2f9-14ad-4b78-a490-970badd1ebb3.png");
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 6rem 5rem 0 5rem;
	opacity: 10px;
	@media (min-width: 0px) and (max-width: 767px) {
		height: 15rem;
	}
`

export const DivTextLogo = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
	line-height: 3.5rem;
	@media (min-width: 0px) and (max-width: 767px) {
		line-height: 2.5rem;
	}
`
