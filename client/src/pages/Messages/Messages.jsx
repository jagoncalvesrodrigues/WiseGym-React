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

const Messages = () => {
	const [toggleDate, setToggleDate] = useState(false);
	return (
		<StyledMainMessages>
			<StyledButtons>
				<StyledBoxDate>
					<StyledIconDate src='assets/images/icon/Date.svg' alt='' />
					<StyledNameButtons>DATE</StyledNameButtons>
				</StyledBoxDate>
				<StyledBoxDate>
					<StyledIconDate src='assets/images/icon/Add.svg' alt='' />
					<StyledNameButtons>ADD</StyledNameButtons>
				</StyledBoxDate>
			</StyledButtons>
			<StyledModifyDate>
				<p>Modify Date</p>
				<StyledBoxDates>
					<label htmlFor=''>Since</label>
					<StyledInputDate type='date' />
				</StyledBoxDates>
				<StyledBoxDates>
					<label htmlFor=''>Until</label>
					<StyledInputDate type='date' />
				</StyledBoxDates>
			</StyledModifyDate>
			<StyledBoxMessages>
				<Message />
			</StyledBoxMessages>
		</StyledMainMessages>
	);
};

export default Messages;
