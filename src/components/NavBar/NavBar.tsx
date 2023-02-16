import { List, ListItem } from '../common/List'

import { BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs'

import './styles.scss'
import Link from 'next/link'

const NavBar = () => {
	return (
		<div className='navbar'>
			<List>
				<Link href='/' className='rule'>
					<ListItem>Receitas</ListItem>
				</Link>
				<Link href='/' className='rule'>
					<ListItem>Sobre</ListItem>
				</Link>
				<Link href='/' className='rule'>
					<ListItem>Contato</ListItem>
				</Link>
			</List>
			<List>
				<ListItem className='icon'>
					<a href='#' target='_blank' aria-label='Icone da página do Instagram'>
						<BsInstagram />
					</a>
				</ListItem>
				<ListItem className='icon'>
					<a href='#' target='_blank' aria-label='Icone da página do Youtube'>
						<BsYoutube />
					</a>
				</ListItem>
				<ListItem className='icon'>
					<a href='#' target='_blank' aria-label='Icone da página do Pinterest'>
						<BsPinterest />
					</a>
				</ListItem>
			</List>
		</div>
	)
}

export default NavBar
