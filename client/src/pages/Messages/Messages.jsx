import { useContext, useEffect, useState } from 'react';
import Message from '../../components/Message/Message';
import {
	StyledBoxDate,
	StyledBoxDates,
	StyledBoxMessages,
	StyledButtons,
	StyledIconDate,
	StyledInputDate,
	StyledMainMessages,
	StyledModifyDate,
	StyledNameButtons
} from './messages.styles';
import AddMessage from '../../components/AddMessage/AddMessage';
import { AuthContext } from '../../contexts/Auth.context';
import { getUserById } from '../../utils/api';
const Messages = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState(null);
	const [toggleDate, setToggleDate] = useState(false);
	const [toggleAddMessage, setToggleAddMessage] = useState(false);
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		getAllMessages(setMessages), getUserById(user, setUserData);
	}, [user]);
	return (
		<>
			<AddMessage
				activeMessage={toggleAddMessage}
				showAddMessage={() => setToggleAddMessage(!toggleAddMessage)}
			/>
			<StyledMainMessages>
				<StyledButtons>
					<StyledBoxDate onClick={() => setToggleDate(!toggleDate)}>
						<StyledIconDate src='/assets/images/icon/Date.svg' alt='' />
						<StyledNameButtons>DATE</StyledNameButtons>
					</StyledBoxDate>
					{userData?.role === 'admin' && (
						<>
							<StyledBoxDate
								onClick={() => setToggleAddMessage(!toggleAddMessage)}
							>
								<StyledIconDate src='/assets/images/icon/Add.svg' alt='' />
								<StyledNameButtons>ADD</StyledNameButtons>
							</StyledBoxDate>
						</>
					)}
				</StyledButtons>
				<StyledModifyDate $isVisible={toggleDate}>
					<p>Modify Date</p>
					<StyledBoxDates>
						<label htmlFor=''>Since</label>
						<StyledInputDate type='date' id='date1' />
					</StyledBoxDates>
					<StyledBoxDates>
						<label htmlFor=''>Until</label>
						<StyledInputDate type='date' id='date2' />
					</StyledBoxDates>
				</StyledModifyDate>
				<StyledBoxMessages>
					<Message message={messages} />
				</StyledBoxMessages>
			</StyledMainMessages>
		</>
	);
};

const getAllMessages = async setMessages => {
	const response = await fetch('http://localhost:3000/api/messages');
	const mens = await response.json();
	setMessages(mens);
};

export default Messages;
