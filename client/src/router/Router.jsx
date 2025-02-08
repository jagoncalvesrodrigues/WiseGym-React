import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/Booking/Booking';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Booking' element={<Booking />} />
		</Routes>
	);
};

export default Router;
