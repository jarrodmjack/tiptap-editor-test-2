import { type AppType } from "next/app"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import React from "react"
import "../app/globals.css"

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Tiptap editor</title>
				<meta name="description" content="🐢" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
})
