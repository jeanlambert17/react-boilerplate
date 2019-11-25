// @flow
import React from 'react';
// Styles
import styles from './welcome.module.scss';

type Props = {
	text: string
};

const Welcome = (props: Props) => <h1 className={styles.text}>{props.text}</h1>;

export default Welcome;
