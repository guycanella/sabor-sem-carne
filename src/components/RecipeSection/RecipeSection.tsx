import Image from 'next/image'
import Link from 'next/link'

import './styles.scss'

const featuredRecipe = {
	title: 'Pizza de carne de Jaca com Abacaxi',
	imageUrl:
		'https://uploads-ssl.webflow.com/63a5a105581f4debc72a5ae5/63a855db60216ae982900718_Pineapple%20Smoked%20Jackfruit%20Pizza-p-1600.webp',
	imageLabel: 'Pizza de carne de Jaca com Abacaxi',
	description:
		'Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus ultricies.',
	recipeLink: '/'
}

const RecipeSection = () => {
	return (
		<div className='feature-recipe'>
			<div className='feature-recipe__image-container'>
				<Image
					src={featuredRecipe.imageUrl}
					alt={featuredRecipe.imageLabel}
					width={864}
					height={621}
				/>
			</div>
			<div className='feature-recipe__content'>
				<h2>{featuredRecipe.title}</h2>
				<p>{featuredRecipe.description}</p>
				<Link href={featuredRecipe.recipeLink}>Veja a receita</Link>
			</div>
		</div>
	)
}

export default RecipeSection
