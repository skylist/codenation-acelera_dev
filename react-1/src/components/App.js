import React, { Component } from 'react'
import { Route, withRouter, Switch, matchPath } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

class App extends Component {

	handlerSearch = ({target})=>{
		this.props.history.push(target.value)
	}

	render() {
		const { pathname } = this.props.location
    	const match = matchPath(pathname, { path: '/:searchString', exact: true });
		return (
			<div className="App">
				<Navbar
					searchString={(match && match.params.searchString) || ''}
					updateUrl={this.handlerSearch}
				/>
				<div className="container mt-10">
				<Switch>
					<Route
						path="/"
						exact
						component={() => (
							<Home recipes={recipes.results} />
						)}
					/>
					<Route
						path={`/recipe/:slug`}
						component={({ match:{params:{slug}} }) => (
							<RecipePage
								recipe={
									recipes.results.filter(
										recipe =>
											slugify(recipe.title) ===
											slug
									)[0]
								}
							/>
						)}
					/>
					<Route
						path="/:searchString"
						component={({ match:{params:{searchString}} }) => (
							<Home
								recipes={recipes.results}
								searchString={searchString}
							/>
						)}
					/>
					</Switch>
				</div>
			</div>
		)
	}
}

export default withRouter(App)
