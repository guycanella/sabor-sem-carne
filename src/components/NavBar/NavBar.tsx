import { List, ListItem } from '../common/List'

import { BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs'

import './styles.scss'

const NavBar = () => {
	return (
		<div className='navbar'>
			<List>
				<ListItem>Receitas</ListItem>
				<ListItem>Sobre</ListItem>
				<ListItem>Contato</ListItem>
			</List>
			<List>
				<ListItem>
					<a href='#' aria-label='Icone da página do Instagram'>
						<BsInstagram />
					</a>
				</ListItem>
				<ListItem>
					<a href='#' aria-label='Icone da página do Youtube'>
						<BsYoutube />
					</a>
				</ListItem>
				<ListItem>
					<a href='#' aria-label='Icone da página do Pinterest'>
						<BsPinterest />
					</a>
				</ListItem>
			</List>
		</div>
	)
}

export default NavBar
