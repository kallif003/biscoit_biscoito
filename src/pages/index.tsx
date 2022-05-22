import React from "react"
import type { NextPage } from "next"
import Header from "../components/Header/Header"
import Logo from "../components/Logo/Logo"

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Logo />
		</div>
	)
}

export default Home
