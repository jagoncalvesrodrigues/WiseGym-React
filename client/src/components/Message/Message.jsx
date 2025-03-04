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

const Message = ({
	message,
	role,
	refreshMessages,
	setMessages,
	getAllMessages
}) => {
	const [selectMessage, setSelectMessage] = useState({});
	const [showMessageDelete, setShowMessageDelete] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	return (
		<>
			{showMessageDelete && (
				<StyledBoxDeleted>
					<p>Message was Deleted</p>
				</StyledBoxDeleted>
			)}
			{message.length === 0 && (
				<StyledNoMessages>
					<h2>NO MESSAGES FROM THE GYM, KEEP TRAINING</h2>
				</StyledNoMessages>
			)}
			<FormMessage
				refreshMessages={() => getAllMessages(setMessages)}
				completeMessage={selectMessage}
				activeForm={showUpdateForm}
				showUpdateForm={() => setShowUpdateForm(!showUpdateForm)}
			/>
			{message.map(men => (
				<StyledBoxMessage key={men._id}>
					{role === 'admin' && (
						<StyledBoxAdmin>
							<img
								src='/assets/images/icon/Edit-B.svg'
								alt=''
								onClick={() => {
									setShowUpdateForm(!showUpdateForm);
									setSelectMessage({
										id: men._id,
										title: men.title,
										text: men.message
									});
								}}
							/>
							<img
								src='/assets/images/icon/Trash.svg'
								alt=''
								onClick={() => {
									deleteMessage(men._id);
									handleClickDelete(setShowMessageDelete, refreshMessages);
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

const handleClickDelete = async (setshowMessageDelete, refreshMessages) => {
	setshowMessageDelete(true);
	// Oculta el mensaje después de 2 segundos
	setTimeout(() => setshowMessageDelete(false), 2000);
	refreshMessages();
};

export default Message;
