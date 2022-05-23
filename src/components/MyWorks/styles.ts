import styled from "styled-components"

export const ContainerMyWorks = styled.div`
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
	border-radius: 0.375rem;
`
export const DivMyWorks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 2.5rem;
`
export const DivButtonsMyWorks = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
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
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 0.8rem;
	font-weight: 700;
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
`
export const GridMyWorks = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 180px);
	column-gap: 3rem;
	row-gap: 4rem;
	padding-right: 40px;
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
	width: 11.2rem;
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
`
