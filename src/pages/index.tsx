import React from "react"
import type { NextPage } from "next"
import Header from "../components/Header/Header"
import Logo from "../components/Logo/Logo"
import AboutMe from "../components/AboutMe/AboutMe"

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Logo />
			<AboutMe />
		</div>
	)
}

export default Home
