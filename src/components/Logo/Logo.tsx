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
				<Title className="text-[#fff]">
					BISCUIT<span>&</span>BISCOITO
				</Title>
				<div className="bg-white rounded-lg w-[24rem] sm:w-[17rem] sm:ml-4 px-2 sm:mt-0 mt-1">
					<Subtitle>DOCES E ARTESANATO</Subtitle>
				</div>
			</DivTextLogo>
			<div className="sm:hidden md:hidden pl-2">
				<Image src={bolo} alt="biscuit" width={500} height={324} />
			</div>
		</ContainerLogo>
	)
}

export default Logo
