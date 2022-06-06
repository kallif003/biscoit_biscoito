import styled from "styled-components"

export const DivMyWorks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 0 2.5rem;
	margin-bottom: 10rem;
	@media (min-width: 0px) and (max-width: 767px) {
		flex-direction: column;
		margin-bottom: 5rem;
	}
`
export const DivButtonsMyWorks = styled.div`
	--tw-space-x-reverse: 0;
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	@media (min-width: 0px) and (max-width: 767px) {
		flex-direction: row;
		justify-content: center;
		margin-right: calc(0.5rem * var(--tw-space-x-reverse));
		margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
	}
`

export const GridMyWorks = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 12.5rem);
	column-gap: 3rem;
	row-gap: 4rem;
	padding-right: 40px;
	@media (min-width: 0px) and (max-width: 767px) {
		grid-template-columns: repeat(1, 15.75rem);
		grid-template-rows: repeat(3, 12.5rem);
		margin-left: auto;
		margin-right: auto;
		padding-right: 0;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-template-columns: repeat(3, 9.5rem);
	}
`
export const Li = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s;
	:hover {
		transform: scale(0.9);
	}
`
export const DivImgMyWorks = styled.div.attrs(
	(props: { color: string }) => props
)`
	width: auto;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 2px;
	background: ${(props) => props.color};
`
export const DivTitleMyWorks = styled.div`
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background: #fff;
	width: 100%;
	height: 2.5rem;
	text-align: center;
	padding-top: 0.5rem;
	font-weight: 700;
	border-color: #cacaca;
	border-width: 1px;
	color: #9a9a9a;
`
export const DivWorkpage = styled.div.attrs(
	(props: { color: string }) => props
)`
	width: 55rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.color};
	border-radius: 0.5rem;
	margin-top: 8rem;
	padding: 2rem;
	@media (min-width: 0px) and (max-width: 767px) {
		flex-direction: column;
		width: 18rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 45rem;
	}
`
export const ContainerTextWorkpage = styled.div`
	width: 30rem;
	padding: 2rem;

	@media (min-width: 0px) and (max-width: 767px) {
		width: 15rem;
		text-align: center;
	}
`
export const ContainerCarousel = styled.div`
	width: 55rem;
	margin: 1.25rem 0 2.5rem 0;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 18rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 45rem;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		width: 55rem;
	}
`
export const ContainerWorkpage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;
	width: 100vw;
	@media (min-width: 0px) and (max-width: 767px) {
		padding: 0 3.5rem 0 3.5rem;
	}
`
