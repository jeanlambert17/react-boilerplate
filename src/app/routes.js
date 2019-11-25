import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Pages
import Home from './containers/home';
import About from './containers/about';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
