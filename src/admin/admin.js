import React from 'react';
// Components
import Message from '../common/components/welcome';
// Styles
import styles from './admin.module.scss';

type Props = {};

const Admin = (props: Props) => {
	return (
		<div className={styles.container}>
			<Message text="Admin module!" />
		</div>
	);
};

export default Admin;
