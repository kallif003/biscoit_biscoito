import React from "react"
import { NextPage } from "next"
import { ContainerLogo, DivTextLogo } from "./style"
import { Title, Subtitle } from "../Typography"
import Image from "next/image"
import bolo from "../../assets/bolo.png"

const Logo: NextPage = () => {
	return (
		<ContainerLogo>
			<DivTextLogo>
				<Title>
					BISCUIT<span>&</span>BISCOITO
				</Title>
				<Subtitle>DOCES E ARTESANATO</Subtitle>
			</DivTextLogo>
			<div className="sm:hidden md:hidden pl-2">
				<Image src={bolo} alt="biscuit" width={500} height={324} />
			</div>
		</ContainerLogo>
	)
}

export default Logo
