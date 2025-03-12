import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/Booking/Booking';
import Store from '../pages/Store/Store';
import ProtectedRoute from './ProtectedRoutes';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Layout from '../Layout/Layout';
import LayoutLogged from '../Layout/LayoutLogged';
import Spaces from '../pages/Spaces/Spaces';
import Reservation from '../pages/Reservation/Reservation';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/store' element={<Store />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/messages' element={<Messages />} />
				<Route element={<LayoutLogged />}>
					<Route path='/booking' element={<Booking />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/reservations' element={<Reservation />} />
					<Route path='/space' element={<Spaces />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
