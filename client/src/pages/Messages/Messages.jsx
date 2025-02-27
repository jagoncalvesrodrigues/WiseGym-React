import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

const Messages = () => {
	const navigate = useNavigate();
	const [toggleDate, setToggleDate] = useState(false);
	const [toggleAddMessage, setToggleAddMessage] = useState(false);
	console.log(toggleDate);
	return (
		<>
			<AddMessage
				navigate={navigate}
				activeMessage={toggleAddMessage}
				showAddMessage={showAddMessage}
				setToggleAddMessage={setToggleAddMessage}
			/>
			<StyledMainMessages>
				<StyledButtons>
					<StyledBoxDate onClick={() => shownDate(setToggleDate)}>
						<StyledIconDate src='/assets/images/icon/Date.svg' alt='' />
						<StyledNameButtons>DATE</StyledNameButtons>
					</StyledBoxDate>
					<StyledBoxDate onClick={() => showAddMessage(setToggleAddMessage)}>
						<StyledIconDate src='/assets/images/icon/Add.svg' alt='' />
						<StyledNameButtons>ADD</StyledNameButtons>
					</StyledBoxDate>
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
					<Message />
				</StyledBoxMessages>
			</StyledMainMessages>
		</>
	);
};

const shownDate = setToggleDate => {
	setToggleDate(estado => !estado);
};

const showAddMessage = setToggleAddMessage => {
	setToggleAddMessage(estadoM => !estadoM);
};

export default Messages;
