import '../globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Sidebar from '../components/sidebar'

const inter = Rubik({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
				<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>
			</head>
			<body className={`${inter.className} `}>
				<div className='bg-bgContent bg-backgroundSecondary bg-cover bg-repeat-y h-auto w-full flex flex-row'>
					<div>
						<Sidebar />
					</div>
					<div className='ml-72 xl:py-8 w-full lg:px-12 flex flex-col'>
						{children}
						<span className="text-center text-textPrimary text-sm bottom-0 my-auto">@ 2023 Feito com ❤️ by Fox Robots</span>
					</div>
				</div>
			</body>
		</html>
	)
}
