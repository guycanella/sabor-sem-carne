import Header from '@/components/Header'
import { ReactNode } from 'react'

import './global.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pt-BR'>
			<head />
			<body>
				<div className='container'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
