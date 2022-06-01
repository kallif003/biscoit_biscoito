import styled from "styled-components"

export const Container = styled.header`
	width: 100vw;
	position: fixed;
	z-index: 10;
`

export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	padding: 0 3rem 0 1rem;
	background-image: url("https://user-images.githubusercontent.com/66094168/169591915-3f43563d-ee80-48bf-ac95-c9107bd87356.png");
	background-repeat: no-repeat;
	@media (min-width: 300px) and (max-width: 767px) {
		padding: 0 0.5rem 0 1rem;
	}
`
export const DivButton = styled.div`
	display: flex;
	justify-content: space-around;
	width: 300px;
	padding-left: 1.5rem;
	@media (min-width: 0px) and (max-width: 1023px) {
		display: none;
	}
`
export const SocialMedia = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-evenly;
`
export const Li = styled.li`
	padding-left: 0.75rem;
`

export const DivMobile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	@media (min-width: 1024px) {
		display: none;
	} ;
`

export const Ul = styled.ul`
	padding-left: 0.5rem;
`
export const LiMobile = `
py-4
`
