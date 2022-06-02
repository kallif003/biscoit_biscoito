import styled from "styled-components"

export const ContainerAboutMe = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	background: #ddf3fa;
	border-radius: 0.5rem;
	margin-top: 1rem;
	@media (min-width: 300px) and (max-width: 767px) {
		width: 20rem;
		flex-direction: column;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 45rem;
		flex-direction: row;
	}
`
export const DivImage = styled.div`
	border-radius: 0.5rem;
	width: 25rem;
	background-image: url("https://user-images.githubusercontent.com/66094168/169720541-1aa3edd4-82e9-4488-949b-e771a974739a.png");
	background-position: center;
	@media (min-width: 300px) and (max-width: 767px) {
		width: 20rem;
	}
`
export const Divtext = styled.div`
	width: 30rem;
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
	@media (min-width: 300px) and (max-width: 767px) {
		width: auto;
	}
`
export const DivHorizontal = styled.div`
	background: linear-gradient(to top, #ddf3fa 10%, transparent 20%);
	height: 35rem;
	@media (min-width: 300px) and (max-width: 767px) {
		background: linear-gradient(to top, #ddf3fa 10%, transparent 20%);
	}
`
export const DivVerticalLeft = styled.div`
	background: linear-gradient(to left, #ddf3fa 2%, transparent 22%);
	height: 30rem;
`
export const DivVerticalRight = styled.div`
	background: linear-gradient(to right, #fdf3f333 5%, transparent 20%);
	height: 30rem;
`
