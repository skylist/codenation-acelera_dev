import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

class App extends Component {
	render() {
		const { location, history } = this.props
		return (
			<div className="App">
				<Navbar
					searchString={location.pathname}
					updateUrl={history.push}
				/>
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
						path={`/recipe/:recipe`}
						render={({ match }) => (
							<RecipePage
								{...match}
								recipe={
									recipes.results.filter(
										recipe =>
											slugify(recipe.title) ==
											match.params.recipe
									)[0]
								}
							/>
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

export default withRouter(App)
