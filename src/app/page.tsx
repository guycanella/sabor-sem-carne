import Categories from '@/components/Categories'
import RecipeSection from '@/components/RecipeSection'

export default function Home() {
	return (
		<>
			<div className='entrance'>
				<h1 className='homeTitle'>
					A melhores receitas
					<br /> vegetarianas da internet
				</h1>
				<Categories />
			</div>
			<RecipeSection />
			<div className='lastest-recipes'>
				<h2>ùltimas receitas</h2>
				<div className='lastest-recipes__container'>
					<div className='lastest-recipes__container__cards'>
						<div className='lastest-recipes__container__cards--recipe-card'>
							<h3>Título da receita</h3>
							<div className='info'>
								<div className='category'>categoria</div>
								<div className='duration'>30 min</div>
							</div>
						</div>
						<div className='lastest-recipes__container__cards--recipe-card'>
							<h3>Título da receita</h3>
							<div className='info'>
								<div className='category'>categoria</div>
								<div className='duration'>30 min</div>
							</div>
						</div>
						<div className='lastest-recipes__container__cards--recipe-card'>
							<h3>Título da receita</h3>
							<div className='info'>
								<div className='category'>categoria</div>
								<div className='duration'>30 min</div>
							</div>
						</div>
					</div>
					<div className='lastest-recipes__container__button'>
						Veja todas as receitas
					</div>
				</div>
			</div>
			<div className='newsletter'>
				<h2>Receba as receitas direto no seu e-mail!</h2>
				<div className='newsletter__form'>
					<form action=''>
						<input type='text' />
						<button>Subscreva</button>
					</form>
				</div>
			</div>
			<div className='about'></div>
		</>
	)
}
