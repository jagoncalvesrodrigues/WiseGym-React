import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const LayoutM = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};
export default LayoutM;
