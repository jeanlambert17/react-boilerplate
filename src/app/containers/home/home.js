// @flow
import React from 'react';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {
	return (
		<div className={styles.container}>
			<p>Home page</p>
			<Link to="/about">About</Link>
		</div>
	);
};

export default Home;
