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

const AddMessage = ({ activeMessage, showAddMessage, setToggleAddMessage }) => {
	return (
		<StyledMessageContainer $activeMessage={activeMessage}>
			<StyledMessageBox>
				<StyledFormMessage action=''>
					<StyledTitleAdd>ADD NEW MESSAGE</StyledTitleAdd>
					<StyledLabel htmlFor=''>Title</StyledLabel>
					<StyledTitleMessage type='text' />
					<StyledLabel htmlFor=''>Text</StyledLabel>
					<StyledTextArea name='' id=''></StyledTextArea>
					<StyledBoxButtons>
						<StyledCancelButton
							onClick={() => showAddMessage(setToggleAddMessage)}
							type='button'
							value='Cancel'
						/>
						<StyledAcceptButton type='button' value='Accept' />
					</StyledBoxButtons>
				</StyledFormMessage>
			</StyledMessageBox>
		</StyledMessageContainer>
	);
};

export default AddMessage;
