import { Switch } from 'react-router-dom';

import homeRoutes from './home';
import authRoutes from './auth';
import notFoundRoutes from './not-found';

export default (
	<Switch>
		{homeRoutes}
		{authRoutes}
		{notFoundRoutes}
	</Switch>
);