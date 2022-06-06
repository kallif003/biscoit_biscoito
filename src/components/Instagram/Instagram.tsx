import React from "react"
import { NextPage } from "next"
import Carousel from "react-elastic-carousel"
import me from "../../assets/me.png"
import Image from "next/image"
import { ContainerInstragram, DivImg, DivCarousel } from "."

const Instagram: NextPage = () => {
	return (
		<ContainerInstragram>
			<DivCarousel>
				<Carousel itemPadding={[50, 60]} itemsToShow={3}>
					<DivImg deg="5deg">
						<Image src={me} alt="me" width={500} height={600} />
					</DivImg>
					<DivImg deg="-2deg">
						<Image src={me} alt="me" width={500} height={600} />
					</DivImg>
				</Carousel>
			</DivCarousel>
		</ContainerInstragram>
	)
}

export default Instagram
