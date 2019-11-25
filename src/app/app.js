// @flow
import React, { Suspense } from 'react';
// Styles
import styles from './app.module.scss';
// Components
const Welcome = React.lazy(() => import('../common/components/welcome'));

type Props = {};

const App = (props: Props) => {
	console.log(process.env.API_URL);
	return (
		<div className={styles.container}>
			<Suspense fallback={<h1>Loading message component</h1>}>
				<Welcome text={process.env.API_URL} />
			</Suspense>
		</div>
	);
};

export default App;
