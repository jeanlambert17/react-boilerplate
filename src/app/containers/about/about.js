// @flow
import React from 'react';
import styles from './about.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

const About = (props: Props) => {
	return (
		<div className={styles.container}>
			<p>About page</p>
			<Link to="/">Home</Link>
		</div>
	);
};

export default About;
