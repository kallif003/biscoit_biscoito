import styled from "styled-components"

export const ContainerFooter = styled.footer`
	background-image: url("https://user-images.githubusercontent.com/66094168/171351989-708df2c8-f258-4a18-97b4-7baa4eb0738e.png");
	background-size: cover;
	background-repeat: no-repeat;
	height: 8rem;
	margin-top: 2rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 0 6.5rem 0 6.5rem;
	@media (min-width: 0) and (max-width: 767px) {
		flex-direction: column;
		height: 20rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		padding: 0;
		justify-content: center;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		padding: 0;
		justify-content: center;
	}
`
export const ContainerText = styled.div`
	width: 12rem;
	height: 5rem;
	text-align: center;
	@media (min-width: 0) and (max-width: 767px) {
		margin-bottom: -3rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		margin-right: 4rem;
	}
`
export const ContainerSocialMedia = styled.div`
	width: 12rem;
	height: 5rem;
	text-align: center;
	@media (min-width: 0) and (max-width: 767px) {
		margin-bottom: -3rem;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		margin: 0 5rem 0 8rem;
	}
`
export const ContainerInfo = styled.div`
	width: 20rem;
	height: 5rem;
	text-align: center;
`
export const DivIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #bce7d6;
`
export const DivInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #bce7d6;
	flex-wrap: wrap;
`
