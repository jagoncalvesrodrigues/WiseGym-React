import { useContext, useState } from 'react';
import { StyledBoxHeader, StyledJoinNow } from './header.styles';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Menu from '../menu/Menu';
import { AuthContext } from '../../contexts/Auth.context';
import { COLORS } from '../../constants/colors';

const Header = () => {
	const { user, loading } = useContext(AuthContext);
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);
	return (
		<StyledBoxHeader>
			{!user && !loading && (
				<>
					<StyledJoinNow onClick={() => setLogin(!login)} $bg={COLORS.white}>
						<p>JOIN NOW</p>
					</StyledJoinNow>
				</>
			)}
			<Register
				registerAppears={() => setRegister(!register)}
				register={register}
			/>
			<Login loginAppears={() => setLogin(!login)} login={login} />
			<Menu
				user={user}
				loading={loading}
				loginAppears={() => setLogin(!login)}
				login={login}
				registerAppears={() => setRegister(!register)}
			/>
		</StyledBoxHeader>
	);
};

export default Header;
