import React, { useState } from "react"
import { NextPage } from "next"
import {
	Container,
	Menu,
	DivButton,
	SocialMedia,
	DivMobile,
	Ul,
	Li,
	Ancora,
	LiMobile,
} from "."
import Icon from "@mdi/react"
import { mdiFacebook } from "@mdi/js"
import { mdiInstagram } from "@mdi/js"
import { mdiWhatsapp } from "@mdi/js"
import { mdiMenu } from "@mdi/js"
import { mdiClose } from "@mdi/js"
import Image from "next/image"
import biscuit from "../../assets/biscuit.png"

const Header: NextPage = () => {
	const [active, setActive] = useState(true)

	const troca = () => {
		setActive(!active)
	}

	return (
		<Container className={active ? "" : "bg-lightPink h-full absolute z-10"}>
			<Menu>
				<div className="sm:hidden pl-2">
					<Image src={biscuit} alt="biscuit" width={50} height={40} />
				</div>

				<DivButton className="text-[1.2rem]">
					<Ancora
						href="#aboutMe"
						className="hover:underline decoration-yellow underline-offset-8">
						Home
					</Ancora>
					<Ancora
						href="#aboutMe"
						className="hover:underline decoration-yellow underline-offset-8">
						Sobre
					</Ancora>
					<Ancora
						href="#aboutMe"
						className="hover:underline decoration-yellow underline-offset-8">
						Produtos
					</Ancora>
				</DivButton>

				<SocialMedia>
					<Icon
						path={mdiFacebook}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
						className="active:scale-90"
					/>
					<Icon
						path={mdiInstagram}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
						className="active:scale-90"
					/>
					<Icon
						path={mdiWhatsapp}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
						className="active:scale-90"
					/>
				</SocialMedia>
				<DivMobile onClick={troca}>
					<Icon
						path={mdiMenu}
						size="35px"
						className={active ? "block " : "hidden"}
						data-cy="cy-hamburguer-menu"
					/>
					<Icon
						path={mdiClose}
						size="35px"
						className={active ? "hidden " : "block"}
						data-cy="cy-close-menu"
						color={"#000"}
					/>
				</DivMobile>
			</Menu>
			<nav className={active ? "hidden" : "block text-[25px] "}>
				<Ul>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={"/"}
							className="hover:text-yellow bg-white rounded-lg px-10 ">
							Home
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={"/"}
							className="hover:text-yellow bg-white rounded-lg px-7">
							Projetos
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={"/"}
							className="hover:text-yellow bg-white rounded-lg px-10">
							Sobre
						</Ancora>
					</Li>
				</Ul>
			</nav>
		</Container>
	)
}

export default Header
