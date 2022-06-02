import React from "react"
import { NextPage } from "next"
import Image from "next/image"
import me from "../../assets/me.png"
import { Name, Comment } from "../Typography"
import Icon from "@mdi/react"
import { mdiFormatQuoteClose } from "@mdi/js"
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
					<Icon
						path={mdiFormatQuoteClose}
						title="User Profile"
						size={3}
						className="mt-[-5rem]"
						color={"#F1C50E"}
					/>
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
					<Icon
						path={mdiFormatQuoteClose}
						title="User Profile"
						size={3}
						className="mt-[-5rem]"
						color={"#F1C50E"}
					/>
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
					<Icon
						path={mdiFormatQuoteClose}
						title="User Profile"
						size={3}
						className="mt-[-5rem]"
						color={"#F1C50E"}
					/>
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
