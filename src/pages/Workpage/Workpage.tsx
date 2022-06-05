/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Image from "next/image"
import { createClient } from "../../../prismicio"
import { useRouter } from "next/router"
import { PrismicRichText } from "@prismicio/react"
import Carousel from "react-elastic-carousel"
import Header from "../../components/Header/Header"
import { TitleWorkpage, ParagraphWorkpage } from "../../components/Typography"
import {
	DivWorkpage,
	ContainerTextWorkpage,
	Li,
	DivImgMyWorks,
	DivTitleMyWorks,
	ContainerCarousel,
	ContainerWorkpage,
} from "../../components/MyWorks"

interface List {
	id: string
	title: string
	description: []
	color: string
	image: string
}

interface ListWork {
	slug: string
	title: string
	image: string
	color: string
}

const Workpage: NextPage = () => {
	const router = useRouter()
	const [work, setWork] = useState<List[]>([])
	const [listWork, setListWork] = useState<ListWork[]>([])
	const [width, setWidth] = useState(3)
	const { slug, type } = router.query

	useEffect(() => {
		const size = window.screen.width
		if (size <= 769) {
			setWidth(1)
		}
		console.log(size)
		async function getProps(type: string, slug: string) {
			const client = createClient()
			const response = [await client.getByUID(type, slug)]

			const data = response.map((p) => ({
				id: p.id,
				title: p.data.title,
				description: p.data.description,
				image: p.data.img.url,
				color: p.data.color,
			}))

			setWork(data)
		}
		async function getListWorks(type: string) {
			const client = createClient()
			const info = await client.getAllByType(String(type), {
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

			setListWork(data)
		}
		if (slug !== undefined) {
			getProps(String(type), String(slug))
			getListWorks(String(type))
		}
	}, [])

	async function getWork(type: string, slug: string) {
		const client = createClient()
		const response = [await client.getByUID(type, slug)]

		const data = response.map((p) => ({
			id: p.id,
			title: p.data.title,
			description: p.data.description,
			image: p.data.img.url,
			color: p.data.color,
		}))

		setWork(data)
	}
	return (
		<ContainerWorkpage>
			<Header />
			{work.map((w) => (
				<DivWorkpage key={w.id} color={w.color}>
					<div className="sm:w-[18rem]">
						<Image src={w.image} alt={w.title} width={500} height={400} />
					</div>
					<ContainerTextWorkpage>
						<TitleWorkpage>{w.title}</TitleWorkpage>
						<PrismicRichText
							field={w.description}
							components={{
								paragraph: ({ children }) => (
									<ParagraphWorkpage>{children}</ParagraphWorkpage>
								),
							}}
						/>
					</ContainerTextWorkpage>
				</DivWorkpage>
			))}
			<ContainerCarousel>
				<Carousel itemsToShow={width}>
					{listWork.map((list) => (
						<Li
							className="w-60 md:w-48"
							key={list.slug}
							onClick={() => getWork(String(type), list.slug)}>
							<DivImgMyWorks color={list.color}>
								<Image
									src={list.image}
									alt="biscuit"
									width={500}
									height={324}
								/>
							</DivImgMyWorks>
							<DivTitleMyWorks>
								<h1>{list.title}</h1>
							</DivTitleMyWorks>
						</Li>
					))}
				</Carousel>
			</ContainerCarousel>
		</ContainerWorkpage>
	)
}

export default Workpage
