import styled from "styled-components"

export const DivMyWorks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 2.5rem;
	@media (min-width: 0px) and (max-width: 767px) {
		flex-direction: column;
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
export const DivImgMyWorks = styled.div`
	width: auto;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 2px;
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
