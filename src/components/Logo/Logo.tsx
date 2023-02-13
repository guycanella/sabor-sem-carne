import Image from 'next/image'

const Logo = () => {
	return (
		<div className='outline-blue'>
			<Image
				src='logo-sabor-sem-carne-transparent.svg'
				alt='Logo do sabor sem carne'
				width={208}
				height={64}
			/>
		</div>
	)
}

export default Logo
