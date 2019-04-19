import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const RecipePage = ({ recipe }) => (
	<div>
		{recipe && (
			<Fragment>
				<img
					className="card-img-top img-fluid"
					src={recipe.thumbnail}
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">
						<strong>Ingredients: </strong>
						{recipe.ingredients}
					</p>
				</div>
			</Fragment>
		)}
		{!recipe && <span className="h1">Recipe not found</span>}
	</div>
)

RecipePage.propTypes = {
	recipe: PropTypes.object,
}

export default RecipePage
