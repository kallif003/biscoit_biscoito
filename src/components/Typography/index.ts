import styled from "styled-components"

// logo component
export const Title = styled.h1`
	font-size: 4rem;
	margin: 0;
	font-weight: bold;
	text-align: center;
	span {
		color: #f1c50e;
		font-size: 4rem;
	}
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 200%;
		span {
			font-size: 150%;
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
	color: #ebcd50;

	font-weight: bold;
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 150%;
		text-align: center;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: 2rem;
		text-align: center;
	}
`
// About me component
export const TitleAboutMe = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	margin-right: 1.25rem;
	color: #f1c50e;
`
export const Content = styled.p`
	overflow-wrap: break-word;
	font-size: 1.5rem;
	font-weight: 600;
	color: #9a9a9a;
`

// Contact component
export const TitleContact = styled.h1`
	color: #9a9a9a;
	font-size: 2rem;
	font-weight: bold;
	@media (min-width: 0) and (max-width: 768px) {
		font-size: 100%;
		margin-top: -8px;
	}
`
export const TextContact = styled.p`
	overflow-wrap: break-word;
	margin-top: 2px;
	font-weight: 600;
	@media (min-width: 0) and (max-width: 768px) {
		font-size: 50%;
	}
`
// Praise component

export const Name = styled.h1`
	color: #7a7a7a;
	font-weight: bold;
	font-size: 1.5rem;
	margin-top: -1rem;
`
export const Comment = styled.p`
	overflow-wrap: break-word;
	color: #9a9a9a;
`
