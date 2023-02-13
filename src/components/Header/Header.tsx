import Logo from '../Logo'
import NavBar from '../NavBar'
import SearchInput from '../SearchInput'

import './styles.scss'

const Header = () => {
	return (
		<header className='main-header'>
			<Logo />
			<SearchInput />
			<NavBar />
		</header>
	)
}

export default Header
