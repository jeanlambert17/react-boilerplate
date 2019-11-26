// @flow
import React from 'react';
import styles from './button.module.scss';

type Props = {
	title: string,
	onPress: () => void
};

const Button = (props: Props) => (
	<button className={styles.container} onPress={props.onPress}>
		{props.title}
	</button>
);

export default Button;
