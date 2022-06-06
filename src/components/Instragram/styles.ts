import styled from "styled-components"

export const ContainerInstragram = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 3rem;

	@media (min-width: 0px) and (max-width: 767px) {
		padding: 0 3.5rem 0 3.5rem;
	}
`

export const DivImg = styled.div.attrs((props: { deg: string }) => props)`
	width: 20rem;
	height: 25rem;
	border-width: 1.5rem;
	border-bottom-width: 3rem;
	border-color: #fff;
	transform: rotate(${(props) => props.deg});
`
export const DivCarousel = styled.div`
	width: 60rem;
`
