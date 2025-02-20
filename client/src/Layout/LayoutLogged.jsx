import { Outlet } from 'react-router-dom';
import VerticalMenu from '../components/VerticalMenu/VerticalMenu';

const LayoutLogged = () => {
	return (
		<div>
			<VerticalMenu />
			<Outlet />
		</div>
	);
};
export default LayoutLogged;
