import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/Booking/Booking';
import Store from '../pages/Store/Store';
import ProtectedRoute from './ProtectedRoutes';
import Profile from '../pages/Profile/Profile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/store' element={<Store />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/booking' element={<Booking />} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
