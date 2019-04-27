import React from 'react'
import PropTypes from 'prop-types'

const RecipePage = ({ recipe }) => 
	recipe 
		? <div className='RecipePage'>
			<img
				className="card-img-top img-fluid"
				src={recipe.thumbnail}
				alt={recipe.title}/>
			<div className="card-body">
				<h5 className="card-title">{recipe.title}</h5>
				<p className="card-text">
					<strong>Ingredients: </strong>
					{recipe.ingredients}
				</p>
			</div>
		  </div>		
		: <span className="h1">Recipe not found</span>
		


RecipePage.propTypes = {
	recipe: PropTypes.object,
}

export default RecipePage
