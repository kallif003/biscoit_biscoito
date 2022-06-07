import React from "react"
import { NextPage } from "next"
import Carousel from "react-elastic-carousel"
import { ContainerInstragram, DivCarousel, DivImg } from "."

const Instagram: NextPage = () => {
	return (
		<ContainerInstragram>
			<DivCarousel>
				<Carousel itemPadding={[50, 0]}>
					<DivImg className="rotate-[20deg]"></DivImg>
					<DivImg></DivImg>
					<DivImg></DivImg>
				</Carousel>
			</DivCarousel>
		</ContainerInstragram>
	)
}

export default Instagram
