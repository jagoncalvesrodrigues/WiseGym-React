import { useState } from 'react';
import {
	StyledBoxAdmin,
	StyledBoxDeleted,
	StyledBoxMessage,
	StyledHeaderMessage,
	StyledNoMessages,
	StyledTextMessage,
	StyledTitle
} from './message.styles';
import FormMessage from '../FormMessage/FormMessage';

const Message = ({ message, role, refreshMessages }) => {
	const [showMessage, setShowMessage] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	return (
		<>
			{showMessage && (
				<StyledBoxDeleted>
					<p>Message was deleted</p>
				</StyledBoxDeleted>
			)}
			{message.length === 0 && (
				<StyledNoMessages>
					<h2>NO MESSAGES FROM THE GYM, KEEP TRAINING</h2>
				</StyledNoMessages>
			)}
			{message.map(men => (
				<StyledBoxMessage key={men._id}>
					<FormMessage
						id={men._id}
						title={men.title}
						textMen={men.message}
						activeForm={showUpdateForm}
						showUpdateForm={() => setShowUpdateForm(!showUpdateForm)}
					/>
					{role === 'admin' && (
						<StyledBoxAdmin>
							<img
								src='/assets/images/icon/Edit-B.svg'
								alt=''
								onClick={() => setShowUpdateForm(!showUpdateForm)}
							/>
							<img
								src='/assets/images/icon/Trash.svg'
								alt=''
								onClick={() => {
									deleteMessage(men._id);
									handleClick(setShowMessage);
									refreshMessages();
								}}
							/>
						</StyledBoxAdmin>
					)}
					<StyledHeaderMessage>
						<StyledTitle>{men.title}</StyledTitle>
						<p>{men.date.split('T')[0]}</p>
					</StyledHeaderMessage>
					<StyledTextMessage>{men.message}</StyledTextMessage>
				</StyledBoxMessage>
			))}
		</>
	);
};

const deleteMessage = async id => {
	await fetch(`http://localhost:3000/api/messages/${id}`, {
		method: 'DELETE'
	});
};

const handleClick = setShowMessage => {
	setShowMessage(true);
	setTimeout(() => setShowMessage(false), 2000); // Oculta el mensaje después de 2 segundos
};

export default Message;
