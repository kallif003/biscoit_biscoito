/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { mdiArrowLeftRight } from "@mdi/js"
import Icon from "@mdi/react"
import Carousel from "react-elastic-carousel"
import { ContainerInstragram, DivCarousel, DivImg } from "."
import { key } from "../../config"
import { InstagramButton } from "../../components/Buttons"
import { Li } from "../../components/MyWorks"
import { HomeTitle } from "../../components/Typography"

interface ListPost {
	id: string
	url: string
	media: string
	type: string
}
interface Props {
	showArrows: boolean
}
const Instagram = ({ showArrows }: Props) => {
	const [post, setPost] = useState<ListPost[]>([])

	useEffect(() => {
		async function getPost() {
			await fetch(
				`https://graph.instagram.com/me/media?access_token=${key}&fields=media_type,media_url,id,permalink`
			)
				.then((res) => res.json())
				.then((data) => data.data)
				.then((inf) => {
					const data = inf
					const info = data.map(
						(p: {
							id: string
							permalink: string
							media_type: string
							media_url: string
						}) => {
							const type = p.media_type
							let media

							if (type == "VIDEO") {
								media = p.media_url
							}
							if (type == "IMAGE") {
								media = p.media_url
							}
							if (type == "CAROUSEL_ALBUM") {
								media = p.media_url
							}

							return {
								id: p.id,
								url: p.permalink,
								media: media,
								type: p.media_type,
							}
						}
					)

					setPost(info)
				})
		}

		getPost()
	}, [])

	return (
		<ContainerInstragram>
			<HomeTitle>Conheça meu Instagram</HomeTitle>
			<DivCarousel>
				<Carousel pagination={false} showArrows={showArrows}>
					{post.slice(0, 10).map((p) => (
						<div key={p.id}>
							{p.type == "VIDEO" ? (
								<Li>
									<a href={p.url} target="_blank" rel="noreferrer">
										<div className="w-[20rem]">
											<video src={p.media} autoPlay />
										</div>
									</a>
								</Li>
							) : (
								<Li>
									<a href={p.url} target="_blank" rel="noreferrer">
										<DivImg>
											<img src={p.media} alt="post" />
										</DivImg>
									</a>
								</Li>
							)}
						</div>
					))}
				</Carousel>
				<Icon
					path={mdiArrowLeftRight}
					title="User Profile"
					size={1.5}
					color="#7a7a7a"
					className="md:hidden lg:hidden xl:hidden "
				/>
				<a
					href="https://www.instagram.com/biscuitebiscoito/"
					target="_blank"
					rel="noreferrer">
					<InstagramButton>Instagram</InstagramButton>
				</a>
			</DivCarousel>
		</ContainerInstragram>
	)
}

export default Instagram
