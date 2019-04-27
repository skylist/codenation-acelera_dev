import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import { slugify, highlightText } from '../helpers'

//#region method to filter recipes
const filterRecipes = (recipes = [], searchString = '') =>{
	return recipes.filter(({title, ingredients}) => 
		title.toLowerCase().includes(searchString.toLowerCase()) || 
		ingredients.toLowerCase().includes(searchString.toLowerCase())
	)
}
//#endregion

//#region method to render recipes
const renderRecipes = (recipes = [], searchString = '') => {
	return (
		filterRecipes(recipes, searchString)
			.map(({title, ingredients, thumbnail}) => (
				<RecipeItem
					key={title}
					title={highlightText(title, searchString)}
					ingredients={highlightText(ingredients,searchString)}
					thumbnail={thumbnail}
					href={slugify(title)}
				/>
				)
			)
	)
}
//#endregion

const Home = ({ recipes = [], searchString = '' }) => (
	<div className="row">
		{renderRecipes(recipes, searchString)}
	</div>
)

Home.propTypes = {
	searchString: PropTypes.string,
	recipes: PropTypes.array,
}

export default Home
