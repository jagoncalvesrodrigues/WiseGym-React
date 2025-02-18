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
	console.log(user);
	console.log(login);
	return (
		<StyledBoxHeader>
			{!user && !loading && (
				<>
					<StyledJoinNow
						onClick={() => registerAppears(setRegister)}
						$bg={COLORS.white}
					>
						<p>JOIN NOW</p>
					</StyledJoinNow>
				</>
			)}
			<Register
				registerAppears={() => registerAppears(setRegister)}
				register={register}
			/>
			<Login loginAppears={() => loginAppears(setLogin)} login={login} />
			<Menu
				user={user}
				loading={loading}
				loginAppears={() => loginAppears(setLogin)}
				registerAppears={() => registerAppears(setRegister)}
			/>
		</StyledBoxHeader>
	);
};
const loginAppears = setLogin => {
	setLogin(estado => !estado);
};

const registerAppears = setRegister => {
	setRegister(estado => !estado);
};

export default Header;
