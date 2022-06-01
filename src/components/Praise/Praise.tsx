import React from "react"
import { NextPage } from "next"
import Image from "next/image"
import me from "../../assets/me.png"
import { Text, Name, Comment } from "../Typography"
import {
	ContainerPraise,
	CardPraise,
	DivImgPraise,
	ContainerImg,
	ContainerText,
} from "."

const Praise: NextPage = () => {
	return (
		<ContainerPraise>
			<CardPraise>
				<ContainerImg>
					<Text>{`"`}</Text>
					<DivImgPraise>
						<Image src={me} alt="biscuit" width={72} height={75} />
					</DivImgPraise>
				</ContainerImg>
				<Name>Nome</Name>
				<ContainerText>
					<Comment>
						jojdoejdoejdojedojedojededddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
					</Comment>
				</ContainerText>
			</CardPraise>
			<CardPraise>
				<ContainerImg>
					<Text>{`"`}</Text>
					<DivImgPraise>
						<Image src={me} alt="biscuit" width={72} height={75} />
					</DivImgPraise>
				</ContainerImg>
				<Name>Nome</Name>
				<ContainerText>
					<Comment>
						jojdoejdoejdojedojedojededddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
					</Comment>
				</ContainerText>
			</CardPraise>
			<CardPraise>
				<ContainerImg>
					<Text>{`"`}</Text>
					<DivImgPraise>
						<Image src={me} alt="biscuit" width={72} height={75} />
					</DivImgPraise>
				</ContainerImg>
				<Name>Nome</Name>
				<ContainerText>
					<Comment>
						jojdoejdoejdojedojedojededddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
					</Comment>
				</ContainerText>
			</CardPraise>
		</ContainerPraise>
	)
}

export default Praise
