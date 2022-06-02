import React from "react"
import { NextPage } from "next"
import { ContainerLogo, DivTextLogo, DivSubtitle } from "./styles"
import { Title, Subtitle } from "../Typography"
import Image from "next/image"
import bolo from "../../assets/bolo.png"

const Logo: NextPage = () => {
	return (
		<ContainerLogo>
			<DivTextLogo>
				<Title className="text-[#fff]">
					BISCUIT<span>&</span>BISCOITO
				</Title>
				<DivSubtitle>
					<Subtitle>DOCES E ARTESANATO</Subtitle>
				</DivSubtitle>
			</DivTextLogo>
			<div className="sm:hidden md:hidden pl-2">
				<Image src={bolo} alt="biscuit" width={500} height={324} />
			</div>
		</ContainerLogo>
	)
}

export default Logo
