import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import { slugify, highlightText } from '../helpers'

const Home = ({ recipes = [], searchString = '' }) => (
	<div className="row">
		{recipes
			.filter(
				recipe =>
					recipe.title
						.toLowerCase()
						.includes(searchString.toLowerCase()) ||
					recipe.ingredients
						.toLowerCase()
						.includes(searchString.toLowerCase())
			)
			.map(recipe => (
				<RecipeItem
					key={recipe.title}
					title={highlightText(recipe.title, searchString)}
					ingredients={highlightText(
						recipe.ingredients,
						searchString
					)}
					thumbnail={recipe.thumbnail}
					href={slugify(recipe.title)}
				/>
			))}
	</div>
)

Home.propTypes = {
	searchString: PropTypes.string,
	recipes: PropTypes.array,
}

export default Home
