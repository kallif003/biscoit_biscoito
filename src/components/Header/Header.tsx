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
		<Container className={active ? "bg-[#5f9ea0]" : "bg-pink h-full"}>
			<Menu className={active ? "bg-[#5f9ea0]" : "bg-pink"}>
				<div className="sm:hidden pl-2">
					<Image src={biscuit} alt="biscuit" width={50} height={40} />
				</div>

				<DivButton className="hover:text-[#3d3d3f]">
					<Ancora href="#aboutMe">Home</Ancora>
					<Ancora href="#aboutMe">Sobre</Ancora>
					<Ancora href="#aboutMe">Produtos</Ancora>
				</DivButton>

				<SocialMedia>
					<Icon
						path={mdiFacebook}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
					/>
					<Icon
						path={mdiInstagram}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
					/>
					<Icon
						path={mdiWhatsapp}
						title="User Profile"
						size={1.2}
						color="#F1C50E"
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
			<nav className={active ? "hidden" : "block"}>
				<Ul>
					<Li className={LiMobile} id="style-li">
						<Ancora href={"/"} className="hover:text-white">
							Home
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora href={"/"} className="hover:text-white">
							Projetos
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora href={"/"} className="hover:text-white">
							Sobre
						</Ancora>
					</Li>

					<Li className={LiMobile} id="style-li">
						<Ancora
							href="https://api.whatsapp.com/send?l=pt_pt&phone=5512991116524"
							target="_blank"
							className="hover:text-white">
							Contate-me
						</Ancora>
					</Li>
				</Ul>
			</nav>
		</Container>
	)
}

export default Header
