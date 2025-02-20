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

const Messages = () => {
	const [toggleDate, setToggleDate] = useState(false);
	const [toggleAddMessage, setToggleAddMessage] = useState(false);
	console.log(toggleDate);
	return (
		<StyledMainMessages>
			<StyledButtons>
				<StyledBoxDate onClick={() => shownDate(setToggleDate)}>
					<StyledIconDate src='/assets/images/icon/Date.svg' alt='' />
					<StyledNameButtons>DATE</StyledNameButtons>
				</StyledBoxDate>
				<StyledBoxDate>
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
			<AddMessage />
		</StyledMainMessages>
	);
};

const shownDate = setToggleDate => {
	setToggleDate(estado => !estado);
};

export default Messages;
