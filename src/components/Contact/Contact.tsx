import React from "react"
import { NextPage } from "next"
import {
	ContainerContact,
	Rain,
	Cloud,
	ContainerCloud,
	ContainerIcon,
	ContainerRain,
} from "."
import { TitleContact } from "../Typography"
import Icon from "@mdi/react"
import { mdiFacebook } from "@mdi/js"
import { mdiInstagram } from "@mdi/js"
import { mdiWhatsapp } from "@mdi/js"

const Contact: NextPage = () => {
	return (
		<ContainerContact>
			<ContainerCloud>
				<Cloud>
					<ContainerIcon>
						<a
							href="https://www.facebook.com/evelyn.camargo.3"
							target="_blank"
							rel="noreferrer">
							<Icon
								path={mdiFacebook}
								title="User Profile"
								size={2}
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
								size={2}
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
								size={2}
								className="active:scale-90 hover:text-[#e98f93]"
							/>
						</a>
					</ContainerIcon>

					<TitleContact>Encomendas e Orçamentos</TitleContact>
				</Cloud>
			</ContainerCloud>

			<ContainerRain>
				<Rain></Rain>
			</ContainerRain>
		</ContainerContact>
	)
}

export default Contact
