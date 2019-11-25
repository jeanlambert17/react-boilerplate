import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
	<BrowserRouter basename="/admin">
		<Switch>
			<Route path="/">
				<div>Home page</div>
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
