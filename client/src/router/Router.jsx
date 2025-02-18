import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/Booking/Booking';
import Store from '../pages/Store/Store';
import ProtectedRoute from './ProtectedRoutes';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Layout from '../Layout/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/store' element={<Store />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/messages' element={<Layout />}>
					<Route path='/messages' element={<Messages />} />
				</Route>
				<Route path='/booking' element={<Booking />} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
