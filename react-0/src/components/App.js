import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
	constructor(props) {
		super(props)

		this.recipes = recipes.results
		console.log(this.recipes)
		this.state = {
			searchString: '',
		}
	}

	render() {
		return (
			<div className="App">
				<Navbar
					searchString={this.state.searchString}
					setSearchString={(searchString) => { this.setState({ searchString }) }}
				/>
				<div className="container mt-10">
					<div className="row">
						{
							this.recipes
								.filter(recipe =>
									recipe.title.toUpperCase().includes(this.state.searchString.toUpperCase()) ||
									recipe.ingredients.toUpperCase().includes(this.state.searchString.toUpperCase()))
								.map((recipe, index) =>
									<RecipeItem
										key={index}
										title={
											<Fragment>
												{recipe.title
													.split(new RegExp(`(${this.state.searchString})`, 'ig'))
													.map((word, index) =>
														word === this.state.searchString
															? !!this.state.searchString.trim()
																? <mark key={index}>{word}</mark>
																: word
															: word)}
											</Fragment>}
										ingredients={
											<Fragment>
												{recipe.ingredients
													.split(new RegExp(`(${this.state.searchString})`, 'ig'))
													.map((word, index) =>
														word === this.state.searchString
															? !!this.state.searchString.trim()
																? <mark key={index}>{word}</mark>
																: word
															: word)}
											</Fragment>}
										thumbnail={recipe.thumbnail}
									/>
								)

						}
					</div>
				</div>
			</div>
		)
	}
}

export default App
