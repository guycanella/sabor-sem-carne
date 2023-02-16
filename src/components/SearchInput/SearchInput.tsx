import { BsSearch } from 'react-icons/bs'

import './styles.scss'

const SearchInput = () => {
	return (
		<div className='search-container'>
			<form action='/search' className='search-container__form'>
				<BsSearch />
				<input
					className='search-container__form--search-input'
					type='search'
					placeholder='Procure por uma receita'
				/>
				<input
					className='search-container__form--search-button'
					type='submit'
				/>
			</form>
		</div>
	)
}

export default SearchInput
