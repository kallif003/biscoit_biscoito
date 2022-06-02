import React from "react"
import { NextPage } from "next"
import Icon from "@mdi/react"
import { mdiFacebook } from "@mdi/js"
import { mdiInstagram } from "@mdi/js"
import { mdiWhatsapp } from "@mdi/js"
import { mdiMapMarkerMultipleOutline } from "@mdi/js"
import { mdiMopedOutline } from "@mdi/js"
import { mdiClockOutline } from "@mdi/js"
import { mdiPhoneInTalkOutline } from "@mdi/js"
import {
	ContainerFooter,
	ContainerInfo,
	ContainerSocialMedia,
	ContainerText,
	DivIcon,
	DivInfo,
} from "./styles"

const Footer: NextPage = () => {
	return (
		<ContainerFooter>
			<ContainerText>
				<h1 className="font-bold text-[1.5rem] text-[#7a7a7a]">{`Biscuit&Biscoito`}</h1>
				<p className="text-white">Agradece a preferência</p>
			</ContainerText>
			<ContainerSocialMedia>
				<h1 className="font-bold text-[1.5rem] text-[#7a7a7a]">
					Redes Sociais
				</h1>
				<DivIcon>
					<Icon
						path={mdiFacebook}
						title="User Profile"
						size={1.2}
						className="active:scale-90"
					/>
					<Icon
						path={mdiInstagram}
						title="User Profile"
						size={1.2}
						className="active:scale-90"
					/>
					<Icon
						path={mdiWhatsapp}
						title="User Profile"
						size={1.2}
						className="active:scale-90"
					/>
				</DivIcon>
			</ContainerSocialMedia>
			<ContainerInfo>
				<h1 className="font-bold text-[1.5rem] text-[#7a7a7a]">Informações</h1>
				<DivInfo>
					<Icon
						path={mdiMapMarkerMultipleOutline}
						title="User Profile"
						size={1}
						className="ml-7"
					/>
					<p className="mr- text-white font-bold">Piranguinho</p>
					<Icon
						path={mdiMopedOutline}
						title="User Profile"
						size={1}
						className="ml-2"
					/>
					<p className="mr-14 text-white font-bold">Entregamos</p>
					<Icon
						path={mdiClockOutline}
						title="User Profile"
						size={1}
						className=""
					/>
					<p className="text-white font-bold">9:00 às 18:00</p>
					<Icon
						path={mdiPhoneInTalkOutline}
						title="User Profile"
						size={1}
						className="ml-2"
					/>
					<p className="text-white font-bold">(35)99191-9191</p>
				</DivInfo>
			</ContainerInfo>
		</ContainerFooter>
	)
}

export default Footer
