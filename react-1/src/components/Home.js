import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import { slugify } from '../helpers'

const Home = ({ recipes = [], searchString = '' }) => (
	<div className="row">
		{recipes
			.filter(
				recipe =>
					slugify(recipe.title).includes(searchString) ||
					slugify(recipe.ingredients).includes(searchString)
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
