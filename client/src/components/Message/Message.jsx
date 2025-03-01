import {
	StyledBoxMessage,
	StyledHeaderMessage,
	StyledTextMessage,
	StyledTitle
} from './message.styles';

const Message = ({ message }) => {
	return (
		<>
			{message.length === 0 && <h2>NO MESSAGES FROM THE GYM, KEEP TRAINING</h2>}
			{message.map(men => (
				<StyledBoxMessage key={men._id}>
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

export default Message;
