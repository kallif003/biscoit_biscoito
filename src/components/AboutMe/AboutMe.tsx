import React, { useEffect, useState } from "react"
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
import { createClient } from "../../../prismicio"

interface List {
	slug: string
	title: string
	text: string
	image: string
}

const AboutMe: NextPage = () => {
	const [aboutMe, setAboutMe] = useState<List[]>([])

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const info = await client.getAllByType("about-me", {
				orderings: [
					{ field: "document.first_publication_date", direction: "desc" },
				],
			})

			const data = info.map((e: any) => ({
				slug: e.uid,
				title: e.data.aboutTitle,
				text: e.data.aboutText,
				image: e.data.aboutImg.url,
			}))
			setAboutMe(data)
		}

		getProps()
	}, [])

	return (
		<div className="flex justify-center items-center mb-20 ">
			{aboutMe.map((about) => (
				<ContainerAboutMe key={about.slug}>
					<DivImage>
						<DivHorizontal>
							<DivVerticalLeft>
								<DivVerticalRight></DivVerticalRight>
							</DivVerticalLeft>
						</DivHorizontal>
					</DivImage>
					<Divtext>
						<TitleAboutMe>{about.title}</TitleAboutMe>
						<Content>{about.text}</Content>
					</Divtext>
				</ContainerAboutMe>
			))}
			<h1 id="work" />
		</div>
	)
}

export default AboutMe
