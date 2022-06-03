import styled from "styled-components"

export const ContainerFooter = styled.footer`
	background-image: url("https://user-images.githubusercontent.com/66094168/171351989-708df2c8-f258-4a18-97b4-7baa4eb0738e.png");
	background-size: cover;
	background-repeat: no-repeat;
	height: 10rem;
	display: flex;
	justify-content: space-evenly;
	padding: 1.5rem 4rem 0 0;
	@media (min-width: 0) and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
		height: 20rem;
		padding: 0;
		margin-top: -15rem;
	}
`

export const DivIcon = styled.div`
	display: flex;
	justify-content: center;
	color: #bce7d6;
`
export const DivInfo = styled.div`
	width: 18rem;
	text-align: center;
	display: flex;
	justify-content: center;
	color: #bce7d6;
	flex-wrap: wrap;
	margin-bottom: 0.5rem;
	@media (min-width: 0) and (max-width: 767px) {
		justify-content: center;
		width: 20rem;
	}
`
export const ContainerText = styled.div``
export const ContainerInfo = styled.div`
	@media (min-width: 0) and (max-width: 767px) {
		margin-top: -1rem;
	}
`
export const ContainerSocialMedia = styled.div`
	@media (min-width: 0) and (max-width: 767px) {
		margin-top: -1.5rem;
	}
`
