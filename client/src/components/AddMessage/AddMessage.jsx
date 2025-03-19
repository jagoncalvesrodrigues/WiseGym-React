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
} from './addmessage.styles';

const AddMessage = ({ activeMessage, showAddMessage, getAllMessages }) => {
	return (
		<StyledMessageContainer $activeMessage={activeMessage}>
			<StyledMessageBox>
				<StyledFormMessage
					onSubmit={async event => {
						await createMessage(event); // Espera a que se cree el mensaje
						showAddMessage(); // Cierra el formulario
						getAllMessages(); // Refresca los mensajes
					}}
				>
					<StyledTitleAdd>ADD NEW MESSAGE</StyledTitleAdd>
					<StyledLabel htmlFor=''>Title</StyledLabel>
					<StyledTitleMessage type='text' name='title' id='title' />
					<StyledLabel htmlFor=''>Text</StyledLabel>
					<StyledTextArea
						type='textarea'
						name='message'
						id='message'
					></StyledTextArea>
					<StyledBoxButtons>
						<StyledCancelButton
							onClick={showAddMessage}
							type='button'
							value='Cancel'
						/>
						<StyledAcceptButton type='submit' value='Accept' />
					</StyledBoxButtons>
				</StyledFormMessage>
			</StyledMessageBox>
		</StyledMessageContainer>
	);
};

const createMessage = async event => {
	event.preventDefault();
	const title = event.target.title.value;
	const message = event.target.message.value;

	//conectar a mongo para que envie la info
	await fetch('https://wise-gym-react-lah7.vercel.app/api/messages', {
		method: 'POST',
		body: JSON.stringify({ title, message }),
		headers: { 'Content-Type': 'application/json' }
	});
};

export default AddMessage;
