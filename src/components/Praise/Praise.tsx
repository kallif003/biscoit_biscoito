import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Image from "next/image"
import { Name } from "../Typography"
import Icon from "@mdi/react"
import { mdiFormatQuoteClose } from "@mdi/js"
import {
	ContainerPraise,
	CardPraise,
	DivImgPraise,
	ContainerImg,
	ContainerText,
} from "."
import { createClient } from "../../../prismicio"
import { PrismicRichText } from "@prismicio/react"

interface List {
	slug: string
	name: string
	image: string
	color: string
	content: []
}

const Praise: NextPage = () => {
	const [myPraises, setMyPraises] = useState<List[]>([])

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const info = await client.getAllByType("my-praises", {
				orderings: [
					{ field: "document.first_publication_date", direction: "desc" },
				],
			})

			const data = info.map((e: any) => ({
				slug: e.uid,
				name: e.data.name,
				image: e.data.img.url,
				color: e.data.color,
				content: e.data.content,
			}))
			setMyPraises(data)
		}

		getProps()
	}, [])

	return (
		<ContainerPraise>
			{myPraises.slice(0, 3).map((praise) => (
				<CardPraise key={praise.slug}>
					<ContainerImg>
						<Icon
							path={mdiFormatQuoteClose}
							title="User Profile"
							size={3}
							className="mt-[-5rem]"
							color={"#F1C50E"}
						/>
						<DivImgPraise color={praise.color}>
							<Image src={praise.image} alt="biscuit" width={72} height={75} />
						</DivImgPraise>
					</ContainerImg>
					<Name>{praise.name}</Name>
					<ContainerText>
						<PrismicRichText
							field={praise.content}
							components={{
								paragraph: ({ children }) => (
									<p className="paragraph text-[#9a9a9a]">{children}</p>
								),
							}}
						/>
					</ContainerText>
				</CardPraise>
			))}
		</ContainerPraise>
	)
}

export default Praise
