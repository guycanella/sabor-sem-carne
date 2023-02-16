import Link from 'next/link'
import CategoryItem from './CategoryItem'

import './styles.scss'

const categoryOptions = [
	{
		title: 'entrada',
		color: '#59871F',
		background: '#F0F5C4'
	},
	{
		title: 'café da manhã',
		color: '#3C3A8F',
		background: '#EFEDFA'
	},
	{
		title: 'almoço',
		color: '#1F8787',
		background: '#E5F7F3'
	},
	{
		title: 'sobremesa',
		color: '#397A9E',
		background: '#E8F5FA'
	},
	{
		title: 'acompanhamento',
		color: '#D16400',
		background: '#FEEFC9'
	},
	{
		title: 'bebidas',
		color: '#F0493E',
		background: '#FFEAE3'
	}
]

const Categories = () => {
	return (
		<div className='entrance__categories'>
			<ul>
				{categoryOptions.map((category) => (
					<Link href='/'>
						<CategoryItem
							key={category.title}
							props={{ color: category.color, background: category.background }}
						>
							{category.title}
						</CategoryItem>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Categories
