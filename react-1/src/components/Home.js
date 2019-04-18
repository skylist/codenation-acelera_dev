import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({ recipes = [], searchString = '' }) => (
	<div className="row">
		{console.log(searchString)}
		{recipes
			.filter(
				recipe =>
					recipe.title
						.toUpperCase()
						.includes(searchString.toUpperCase()) ||
					recipe.ingredients
						.toUpperCase()
						.includes(searchString.toUpperCase())
			)
			.map(recipe => (
				<RecipeItem
					key={recipe.href}
					title={recipe.title}
					ingredients={recipe.ingredients}
					thumbnail={recipe.thumbnail}
				/>
			))}
	</div>
)

Home.propTypes = {
	searchString: PropTypes.string,
	recipes: PropTypes.array,
}

export default Home
