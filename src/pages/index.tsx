import React from "react"
import type { NextPage } from "next"
import Header from "../components/Header/Header"
import Logo from "../components/Logo/Logo"
import AboutMe from "../components/AboutMe/AboutMe"
import MyWorks from "../components/MyWorks/MyWorks"
import Footer from "../components/Footer/Footer"
import Praise from "../components/Praise/Praise"

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Logo />
			<h1 className="text-yellow text-center text-[50px] my-10">
				Seja Bem Vindo
			</h1>
			<AboutMe />
			<h1 className="text-yellow text-center text-[50px] mt-10">
				Conheça meu trabalho
			</h1>
			<MyWorks />
			<Praise />
			<Footer />
		</div>
	)
}

export default Home
