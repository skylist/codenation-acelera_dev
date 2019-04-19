import React from 'react'

const RecipeItem = ({ title, ingredients, thumbnail, href }) => (
	<div className="RecipeItem col-sm-3 mt-4">
		<a className="card" href={`/recipe/${href}`}>
			<img className="card-img-top img-fluid" src={thumbnail} alt="" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
					<strong>Ingredients: </strong>
					{ingredients}
				</p>
			</div>
		</a>
	</div>
)

export default RecipeItem
