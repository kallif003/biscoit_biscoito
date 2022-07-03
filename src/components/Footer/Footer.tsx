import React, { useState, useEffect } from "react"
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
import { createClient } from "../../../prismicio"

interface List {
	slug: string
	time: string
	phone: string
}

const Footer: NextPage = () => {
	const [myInfo, setMyInfo] = useState<List[]>([])

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const info = await client.getAllByType("my-info", {
				orderings: [
					{ field: "document.first_publication_date", direction: "desc" },
				],
			})

			const data = info.map((e: any) => ({
				slug: e.uid,
				time: e.data.time,
				phone: e.data.phone,
			}))
			setMyInfo(data)
		}

		getProps()
	}, [])

	return (
		<ContainerFooter>
			<ContainerText>
				<h1 className="text-[#7a7a7a] font-bold text-[1.5rem] text-center">{`Biscuit&Biscuito`}</h1>
				<h1 className="text-[#fff] text-[1.2rem] font-bold">
					Agradeço pela preferencia
				</h1>
			</ContainerText>

			<ContainerInfo>
				<h1 className="text-[#7a7a7a] font-bold text-[1.5rem] text-center ml-1">
					Informações
				</h1>
				{myInfo.map((info) => (
					<DivInfo key={info.slug}>
						<Icon path={mdiClockOutline} title="User Profile" size={1} />
						<p className="text-white font-bold mr-2">{info.time}</p>

						<Icon path={mdiPhoneInTalkOutline} title="User Profile" size={1} />
						<p className=" text-white font-bold">{info.phone}</p>
					</DivInfo>
				))}
				<DivInfo>
					<Icon
						path={mdiMapMarkerMultipleOutline}
						title="User Profile"
						size={1}
					/>
					<p className=" text-white font-bold mr-2">Piranguinho</p>

					<Icon path={mdiMopedOutline} title="User Profile" size={1} />
					<p className="text-white font-bold">Entregamos</p>
				</DivInfo>
			</ContainerInfo>

			<ContainerSocialMedia>
				<h1 className="text-[#7a7a7a] font-bold text-[1.5rem] ">
					Redes Sociais
				</h1>
				<DivIcon>
					<a
						href="https://www.facebook.com/evelyn.camargo.3"
						target="_blank"
						rel="noreferrer">
						<Icon
							path={mdiFacebook}
							title="User Profile"
							size={1.2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
					</a>
					<a
						href="https://www.instagram.com/biscuitebiscoito/"
						target="_blank"
						rel="noreferrer">
						<Icon
							path={mdiInstagram}
							title="User Profile"
							size={1.2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
					</a>
					<a
						href="https://api.whatsapp.com/send?l=pt_pt&phone=553598946287"
						target="_blank"
						rel="noreferrer">
						<Icon
							path={mdiWhatsapp}
							title="User Profile"
							size={1.2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
					</a>
				</DivIcon>
			</ContainerSocialMedia>
		</ContainerFooter>
	)
}

export default Footer
