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

const FormMessage = ({ id, title, textMen, activeForm, showUpdateForm }) => {
	return (
		<StyledMessageContainer $activeMessage={activeForm}>
			<StyledMessageBox>
				<StyledFormMessage
					onSubmit={event => {
						updateMessage(event, id);
						showUpdateForm();
					}}
				>
					<StyledTitleAdd>ADD NEW MESSAGE</StyledTitleAdd>
					<StyledLabel htmlFor=''>Title</StyledLabel>
					<StyledTitleMessage
						type='text'
						name='title'
						id='title'
						defaultValue={title}
					/>
					<StyledLabel htmlFor=''>Text</StyledLabel>
					<StyledTextArea
						type='textarea'
						name='message'
						id='message'
						defaultValue={textMen}
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
	);
};

const updateMessage = async (event, id) => {
	event.preventDefault();
	const title = event.target.title.value;
	const message = event.target.message.value;

	//conectar a mongo para que envie la info
	await fetch(`http://localhost:3000/api/messages/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({ title, message }),
		headers: { 'Content-Type': 'application/json' }
	});
};

export default FormMessage;
