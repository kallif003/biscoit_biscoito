import React from "react"
import { NextPage } from "next"
import Icon from "@mdi/react"
import bolo1 from "../../assets/bolo1.png"
import Image from "next/image"
import { mdiCakeVariantOutline } from "@mdi/js"
import { mdiPaletteOutline } from "@mdi/js"
import { mdiCookieOutline } from "@mdi/js"
import {
	ContainerMyWorks,
	DivMyWorks,
	DivButtonsMyWorks,
	ButtonsMyWorks,
	GridMyWorks,
	DivImgMyWorks,
	DivTitleMyWorks,
	Li,
} from "."

const MyWorks: NextPage = () => {
	return (
		<ContainerMyWorks>
			<DivMyWorks>
				<DivButtonsMyWorks>
					<ButtonsMyWorks>
						<Icon
							path={mdiCakeVariantOutline}
							title="User Profile"
							size={2}
							className="active:scale-90"
						/>
					</ButtonsMyWorks>
					<ButtonsMyWorks>
						<Icon
							path={mdiPaletteOutline}
							title="User Profile"
							size={2}
							className="active:scale-90"
						/>
					</ButtonsMyWorks>
					<ButtonsMyWorks>
						<Icon
							path={mdiCookieOutline}
							title="User Profile"
							size={2}
							className="active:scale-90"
						/>
					</ButtonsMyWorks>
				</DivButtonsMyWorks>
				<GridMyWorks>
					<Li>
						<DivImgMyWorks className="bg-lightYellow">
							<Image src={bolo1} alt="biscuit" width={500} height={324} />
						</DivImgMyWorks>
						<DivTitleMyWorks>
							<h1>Bolo LoL</h1>
						</DivTitleMyWorks>
					</Li>
					<Li>
						<DivImgMyWorks className="bg-yellow">
							<Image src={bolo1} alt="biscuit" width={500} height={324} />
						</DivImgMyWorks>
						<DivTitleMyWorks>
							<h1>Bolo LoL</h1>
						</DivTitleMyWorks>
					</Li>
					<Li>
						<DivImgMyWorks className="bg-lightGreen">
							<Image src={bolo1} alt="biscuit" width={500} height={324} />
						</DivImgMyWorks>
						<DivTitleMyWorks>
							<h1>Bolo LoL</h1>
						</DivTitleMyWorks>
					</Li>
				</GridMyWorks>
			</DivMyWorks>
		</ContainerMyWorks>
	)
}

export default MyWorks
