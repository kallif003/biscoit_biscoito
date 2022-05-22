import styled from "styled-components"

export const Title = styled.h1`
	color: #fff;
	font-size: 4rem;
	margin: 0;
	font-weight: bold;
	span {
		color: #f1c50e;
		font-size: 4rem;
	}
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 2rem;
		span {
			font-size: 2rem;
		}
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		font-size: 3rem;
		span {
			font-size: 3rem;
		}
	}
`
export const Subtitle = styled.h3`
	font-size: 2rem;
	margin: 0;
	text-align: start;
	color: #499995;

	font-weight: bold;
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 1.2rem;
		text-align: center;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: 2rem;
		text-align: center;
	}
`
