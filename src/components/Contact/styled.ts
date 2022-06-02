import styled from "styled-components"

export const ContainerContact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	align-items: center;
	margin-top: -7rem;
	padding-right: 5rem;
	height: 50rem;
	width: 100vw;
	@media (min-width: 768px) and (max-width: 1023px) {
		margin-right: 2rem;
	}
`
export const Rain = styled.div`
	background-image: url("https://user-images.githubusercontent.com/66094168/170534481-c9956417-2d76-4969-9eb2-088ee570e5d5.png");
	background-repeat: repeat-y;
	background-size: cover;
	height: 13.8rem;
	width: 100%;
	animation: snow 12s linear infinite;
	@keyframes snow {
		/*Primeiro a posição zero da imagem.*/
		0% {
			background-position: center 0%, center 0%, center 0%;
		}
		/*Depois a posição final.*/
		100% {
			background-position: center 1000px;
		}
	}
	@media (min-width: 0) and (max-width: 767px) {
		height: 10rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		height: 12.8rem;
	}
`
export const Cloud = styled.div`
	background-image: url("https://user-images.githubusercontent.com/66094168/170533714-e75e5417-8293-4d5c-87b6-4fd26643d23c.png");
	background-size: cover;
	height: 34.375rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	padding: 2rem 0 0 4rem;
	@media (min-width: 0px) and (max-width: 767px) {
		height: 13.8rem;
		padding: 2rem 0 0 2rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		height: 30.8rem;
	}
`
export const ContainerCloud = styled.div`
	width: 50rem;
	position: absolute;
	z-index: 1;
	top: 1rem;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 22rem;
		top: 4rem;
		margin-left: 3rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 45.8rem;
	}
`
export const ContainerIcon = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 5rem;
	}
`
export const ContainerRain = styled.div`
	width: 48rem;
	position: absolute;
	margin: 7rem 0 0 6rem;

	@media (min-width: 0px) and (max-width: 767px) {
		width: 15.5rem;
		margin-left: 3rem;
		margin-top: -12rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 40.8rem;
	}
`
