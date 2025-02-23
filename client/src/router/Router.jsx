import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/Booking/Booking';
import Store from '../pages/Store/Store';
import ProtectedRoute from './ProtectedRoutes';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Layout from '../Layout/Layout';
import LayoutLogged from '../Layout/LayoutLogged';
import Reservations from '../pages/Reservations/Reservations';
import Spaces from '../pages/Spaces/Spaces';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/store' element={<Store />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/messages' element={<Layout />}>
					<Route index element={<Messages />} />
				</Route>
				<Route element={<LayoutLogged />}>
					<Route path='/booking' element={<Booking />} />
					<Route path='/reservation' element={<Booking />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/reservations' element={<Reservations />} />
					<Route path='/space' element={<Spaces />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
