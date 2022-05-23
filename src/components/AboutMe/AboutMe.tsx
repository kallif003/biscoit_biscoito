import React from "react"
import { NextPage } from "next"
import {
	ContainerAboutMe,
	DivImage,
	DivHorizontal,
	DivVerticalLeft,
	DivVerticalRight,
	Divtext,
} from "."
import { TitleAboutMe, Content } from "../Typography"

const AboutMe: NextPage = () => {
	return (
		<div className="flex justify-center items-center mb-20">
			<ContainerAboutMe>
				<DivImage>
					<DivHorizontal>
						<DivVerticalLeft>
							<DivVerticalRight></DivVerticalRight>
						</DivVerticalLeft>
					</DivHorizontal>
				</DivImage>
				<Divtext>
					<TitleAboutMe>Ola</TitleAboutMe>
					<Content>
						Passando por aqui pra te desejar boas vindas, e espero que goste do
						meu trabalho, pois o faco com muito carinho. Sou doceira, artesa e
						muito criativa.
					</Content>
				</Divtext>
			</ContainerAboutMe>
		</div>
	)
}

export default AboutMe
