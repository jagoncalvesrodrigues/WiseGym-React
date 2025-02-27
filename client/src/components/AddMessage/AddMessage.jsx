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

const AddMessage = ({
	navigate,
	activeMessage,
	showAddMessage,
	setToggleAddMessage
}) => {
	return (
		<StyledMessageContainer $activeMessage={activeMessage}>
			<StyledMessageBox>
				<StyledFormMessage onSubmit={event => createMessage(event, navigate)}>
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
							onClick={() => showAddMessage(setToggleAddMessage)}
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

const createMessage = async (event, navigate) => {
	event.preventDefault();
	const title = event.target.title.value;
	const message = event.target.message.value;

	//conectar a mongo para que envie la info
	await fetch('http://localhost:3000/api/messages', {
		method: 'POST',
		body: JSON.stringify({ title, message }),
		headers: { 'Content-Type': 'application/json' }
	});
	navigate('/messages');
};

export default AddMessage;
