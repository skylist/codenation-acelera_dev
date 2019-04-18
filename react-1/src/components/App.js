import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* TODO: Navbar precisa receber a string da URL */}
				<Navbar searchString="" />
				)}/>
				<div className="container mt-10">
					{/* TODO: Implementar rotas  */}
					<Route
						path="/"
						exact
						render={props => (
							<Home {...props} recipes={recipes.results} />
						)}
					/>
					<Route
						path="/:searchString"
						render={({ match }) => (
							<Home
								{...match}
								recipes={recipes.results}
								searchString={match.params.searchString}
							/>
						)}
					/>
				</div>
			</div>
		)
	}
}

export default App
