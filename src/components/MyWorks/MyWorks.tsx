import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Icon from "@mdi/react"
import Image from "next/image"
import { mdiCakeVariantOutline } from "@mdi/js"
import { mdiPaletteOutline } from "@mdi/js"
import { mdiCookieOutline } from "@mdi/js"
import { ButtonsMyWorks } from "../Buttons"
import {
	DivMyWorks,
	DivButtonsMyWorks,
	GridMyWorks,
	DivImgMyWorks,
	DivTitleMyWorks,
	Li,
} from "."
import { createClient } from "../../../prismicio"

interface List {
	slug: string
	title: string
	image: string
	color: string
}

const MyWorks: NextPage = () => {
	const [myWork, setMyWork] = useState<List[]>([])

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const info = await client.getAllByType("my-cakes", {
				orderings: [
					{ field: "document.first_publication_date", direction: "desc" },
				],
			})

			const data = info.map((e: any) => ({
				slug: e.uid,
				title: e.data.title,
				image: e.data.img.url,
				color: e.data.color,
			}))
			setMyWork(data)
		}

		getProps()
	}, [])

	async function cakes(type: string) {
		const client = createClient()
		const info = await client.getAllByType(type, {
			orderings: [
				{ field: "document.first_publication_date", direction: "desc" },
			],
		})

		const data = info.map((e: any) => ({
			slug: e.uid,
			title: e.data.title,
			image: e.data.img.url,
			color: e.data.color,
		}))
		setMyWork(data)
	}

	return (
		<DivMyWorks>
			<DivButtonsMyWorks className="sm:space-x-2">
				<ButtonsMyWorks onClick={() => cakes("my-cakes")}>
					<Icon
						path={mdiCakeVariantOutline}
						title="User Profile"
						size={2}
						className="active:scale-90"
					/>
				</ButtonsMyWorks>
				<ButtonsMyWorks onClick={() => cakes("my-art")}>
					<Icon
						path={mdiPaletteOutline}
						title="User Profile"
						size={2}
						className="active:scale-90"
					/>
				</ButtonsMyWorks>
				<ButtonsMyWorks onClick={() => cakes("my-biscuit")}>
					<Icon
						path={mdiCookieOutline}
						title="User Profile"
						size={2}
						className="active:scale-90"
					/>
				</ButtonsMyWorks>
			</DivButtonsMyWorks>
			<GridMyWorks>
				{myWork.slice(0, 6).map((cake) => (
					<Li key={cake.slug}>
						<DivImgMyWorks color={cake.color}>
							<Image src={cake.image} alt="biscuit" width={500} height={324} />
						</DivImgMyWorks>
						<DivTitleMyWorks>
							<h1>{cake.title}</h1>
						</DivTitleMyWorks>
					</Li>
				))}
			</GridMyWorks>
		</DivMyWorks>
	)
}

export default MyWorks
