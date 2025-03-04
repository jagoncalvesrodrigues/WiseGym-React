import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const { user, loading } = useContext(AuthContext);

	// console.log('🔄 ProtectedRoute render');
	// console.log('🟡 Loading:', loading);
	// console.log('👤 User:', user);

	if (loading) return <h1>Loading...</h1>;
	if (!user) {
		console.log('🔴 Usuario no autenticado. Redirigiendo a Home...');
		return <Navigate to='/' replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
