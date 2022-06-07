/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Carousel from "react-elastic-carousel"
import { ContainerInstragram, DivCarousel, DivImg } from "."
import { key } from "../../config"
import { InstagramButton } from "../../components/Buttons"
import { Li } from "../../components/MyWorks"

interface ListPost {
	id: any
	url: any
	media: string
	type: string
}

const Instagram: NextPage = () => {
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
					const info = data.map((p: any) => {
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
					})

					setPost(info)
				})
		}

		getPost()
	}, [])

	return (
		<ContainerInstragram>
			<DivCarousel>
				<Carousel pagination={false}>
					{post.map((p) => (
						<div key={p.id}>
							{p.type == "VIDEO" ? (
								<Li>
									<a href={p.url} target="_blank" rel="noreferrer">
										<div className="w-[20rem]">
											<video src={p.media} controls />
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
