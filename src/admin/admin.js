import React from 'react';
// Components
import Welcome from '../common/components/welcome';
// Styles
import classes from './admin.module.scss';
// Routes
import Routes from './routes';

type Props = {};

const Admin = (props: Props) => {
	return (
		<div className={classes.container}>
			<Welcome text="This is the admin module" />
			<Routes />
		</div>
	);
};

export default Admin;
