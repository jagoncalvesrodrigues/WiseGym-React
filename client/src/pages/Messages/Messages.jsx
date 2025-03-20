import { useContext, useEffect, useState } from 'react';
import Message from '../../components/Message/Message';
import {
	StyledBoxDate,
	StyledBoxDates,
	StyledBoxMessages,
	StyledButtonDate,
	StyledButtons,
	StyledFormDates,
	StyledIconDate,
	StyledInputDate,
	StyledMainMessages,
	StyledModifyDate,
	StyledNameButtons,
	StyledTitleDate
} from './messages.styles';
import AddMessage from '../../components/AddMessage/AddMessage';
import { AuthContext } from '../../contexts/Auth.context';
import { getUserById } from '../../utils/api';
import MenuMessages from '../../components/menuMessages/menuMessages';
const Messages = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState(null);
	const [toggleDate, setToggleDate] = useState(false);
	const [toggleAddMessage, setToggleAddMessage] = useState(false);
	const [messages, setMessages] = useState([]);
	const [date1, setDate1] = useState('');
	const [date2, setDate2] = useState('');

	useEffect(() => {
		getAllMessages(setMessages), getUserById(user, setUserData);
	}, [user]);
	return (
		<>
			<MenuMessages />
			<AddMessage
				getAllMessages={() => getAllMessages(setMessages)}
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
					<StyledTitleDate>Modify Date</StyledTitleDate>
					<StyledFormDates>
						<StyledBoxDates>
							<label htmlFor=''>Since</label>
							<StyledInputDate
								type='date'
								id='date1'
								value={date1}
								onChange={e => setDate1(e.target.value)}
							/>
						</StyledBoxDates>
						<StyledBoxDates>
							<label htmlFor=''>Until</label>
							<StyledInputDate
								type='date'
								id='date2'
								value={date2}
								onChange={e => setDate2(e.target.value)}
							/>
						</StyledBoxDates>
						<StyledButtonDate onClick={() => handleFilterMessages}>
							SEARCH
						</StyledButtonDate>
					</StyledFormDates>
				</StyledModifyDate>
				<StyledBoxMessages>
					<Message
						getAllMessages={getAllMessages}
						setMessages={setMessages}
						role={userData?.role}
						message={messages}
						refreshMessages={() => getAllMessages(setMessages)}
					/>
				</StyledBoxMessages>
			</StyledMainMessages>
		</>
	);
};

const getAllMessages = async setMessages => {
	const response = await fetch(
		'https://server-k79qevkf5-juans-projects-e9623df8.vercel.app/api/messages'
	);
	const mens = await response.json();
	setMessages(mens);
};

const getMessageByRangeDate = async (date1, date2, setMessages) => {
	const response = await fetch(
		`http://localhost:3000/api/messages/${date1}/${date2}` // Modificado para pasar las fechas como parte de la ruta
	);
	const filteredMessages = await response.json();
	setMessages(filteredMessages);
};

// Función que maneja el filtro de fechas
const handleFilterMessages = async (date1, date2, setMessages) => {
	if (date1 && date2) {
		// Solo obtenemos los mensajes si las fechas son válidas
		await getMessageByRangeDate(date1, date2, setMessages);
	} else {
		// Si no hay fechas seleccionadas, obtenemos todos los mensajes
		getAllMessages(setMessages);
	}
};
export default Messages;
