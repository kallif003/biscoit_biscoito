import React from "react"
import { NextPage } from "next"
import Carousel from "react-elastic-carousel"
import me from "../../assets/me.png"
import Image from "next/image"
import { ContainerInstragram, DivCarousel, DivImg } from "."

const Instagram: NextPage = () => {
	return (
		<ContainerInstragram>
			<DivCarousel>
				<Carousel itemPadding={[50, 0]}>
					<DivImg className="rotate-[20deg]">
						<Image src={me} alt="me" width={500} height={600} />
					</DivImg>
					<DivImg>
						<Image src={me} alt="me" width={500} height={600} />
					</DivImg>
					<DivImg>
						<Image src={me} alt="me" width={500} height={600} />
					</DivImg>
				</Carousel>
			</DivCarousel>
		</ContainerInstragram>
	)
}

export default Instagram
