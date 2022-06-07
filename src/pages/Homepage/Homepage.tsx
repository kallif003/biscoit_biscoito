import React from "react"
import { NextPage } from "next"
import Header from "../../components/Header/Header"
import Logo from "../../components/Logo/Logo"
import AboutMe from "../../components/AboutMe/AboutMe"
import MyWorks from "../../components/MyWorks/MyWorks"
import Footer from "../../components/Footer/Footer"
import Praise from "../../components/Praise/Praise"
import Contact from "../../components/Contact/Contact"
import { HomeTitle } from "../../components/Typography"
import { InstagramButton } from "../../components/Buttons"
import Instagram from "../../components/Instagram/Instagram"

const Homepage: NextPage = () => {
	return (
		<>
			<Header />
			<Logo />
			<section>
				<HomeTitle id="aboutMe">Seja Bem Vindo</HomeTitle>
				<AboutMe />
				<HomeTitle id="works">Meus trabalhos</HomeTitle>
				<MyWorks />
				<HomeTitle>Elogios</HomeTitle>
				<Praise />
				<HomeTitle>Entre em contato</HomeTitle>
				<Contact />
				<HomeTitle>Conheça meu Instagram</HomeTitle>
				<Instagram />
				<InstagramButton>Instragram</InstagramButton>
				<Footer />
			</section>
		</>
	)
}

export default Homepage
