// @flow
import React, { Suspense } from 'react';
// Styles
import styles from './app.module.scss';
// Router
import Routes from './routes';
// Lazy components
const Welcome = React.lazy(() => import('../common/components/welcome'));

type Props = {};

const App = (props: Props) => {
	return (
		<div className={styles.container}>
			<Suspense fallback={<h1>Loading message component</h1>}>
				<Welcome text={'Welcome to my new app!'} />
			</Suspense>
			<Routes />
		</div>
	);
};

export default App;
