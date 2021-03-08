import { Route } from 'react-router-dom'
import Auth from '../components/pages/Auth/Auth';
import SignUp from '../components/pages/Auth/SignUp/SignUp';
import SignIn from '../components/pages/Auth/SignIn/SignIn';

const BASE_URL = '/auth';

export default (
	<>
		<Route exact path={BASE_URL} component={Auth}></Route>
		<Route exact path={`${BASE_URL}/sign-up`} component={SignUp}></Route>
		<Route exact path={`${BASE_URL}/sign-in`} component={SignIn}></Route>
	</>
)