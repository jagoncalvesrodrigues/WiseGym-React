import { useState } from 'react';
import { StyledBoxDeleted } from '../Message/message.styles';
import {
	StyledAcceptButton,
	StyledBoxButtons,
	StyledCancelButton,
	StyledFormMessage,
	StyledLabel,
	StyledMessageBox,
	StyledMessageContainer,
	StyledTextArea,
	StyledTitleAdd,
	StyledTitleMessage
} from './formMessage.styles';

const FormMessage = ({
	completeMessage,
	activeForm,
	showUpdateForm,
	refreshMessages
}) => {
	const [showMessageUpdate, setShowMessageUpdate] = useState(false);
	const idUser = completeMessage.id;

	return (
		<>
			{showMessageUpdate && (
				<StyledBoxDeleted>
					<p>Message was Updated</p>
				</StyledBoxDeleted>
			)}
			<StyledMessageContainer $activeMessage={activeForm}>
				<StyledMessageBox>
					<StyledFormMessage
						onSubmit={event =>
							handleSubmit(
								event,
								idUser,
								refreshMessages,
								showUpdateForm,
								setShowMessageUpdate
							)
						}
					>
						<StyledTitleAdd>UPDATE MESSAGE</StyledTitleAdd>
						<StyledLabel htmlFor=''>Title</StyledLabel>
						<StyledTitleMessage
							type='text'
							name='title'
							id='title'
							defaultValue={completeMessage.title}
						/>
						<StyledLabel htmlFor=''>Text</StyledLabel>
						<StyledTextArea
							name='message'
							id='message'
							defaultValue={completeMessage.text}
						></StyledTextArea>
						<StyledBoxButtons>
							<StyledCancelButton
								onClick={showUpdateForm}
								type='button'
								value='Cancel'
							/>
							<StyledAcceptButton type='submit' value='Update' />
						</StyledBoxButtons>
					</StyledFormMessage>
				</StyledMessageBox>
			</StyledMessageContainer>
		</>
	);
};

const updateMessage = async (event, id) => {
	event.preventDefault();
	const title = event.target.title.value;
	const message = event.target.message.value;

	//conectar a mongo para que envie la info
	await fetch(
		`https://server-k79qevkf5-juans-projects-e9623df8.vercel.app/api/messages/${id}`,
		{
			method: 'PATCH',
			body: JSON.stringify({ title, message }),
			headers: { 'Content-Type': 'application/json' }
		}
	);
};

// Función para manejar el envío del formulario
const handleSubmit = async (
	event,
	idUser,
	refreshMessages,
	showUpdateForm,
	setShowMessageUpdate
) => {
	event.preventDefault();
	await updateMessage(event, idUser);
	refreshMessages();
	showUpdateForm();

	setShowMessageUpdate(true);
	// Oculta el mensaje después de 2 segundos
	setTimeout(() => setShowMessageUpdate(false), 2000);
	refreshMessages();
};

export default FormMessage;
