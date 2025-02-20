import {
	StyledBoxMessage,
	StyledHeaderMessage,
	StyledTextMessage,
	StyledTitle
} from './message.styles';

const Message = () => {
	return (
		<>
			<StyledBoxMessage>
				<StyledHeaderMessage>
					<StyledTitle>Competition event reminder</StyledTitle>
					<p>10-02-2025</p>
				</StyledHeaderMessage>
				<StyledTextMessage>
					Hello Team! 💥. This Saturday, February 10 we have the internal
					martial arts tournament 🥋. It will be an excellent opportunity to put
					into practice everything you have learned and measure your progress.
					Registration is free and open to all members, come join us! 💪 See you
					at the competition! Time: 10:00 AM
				</StyledTextMessage>
			</StyledBoxMessage>
			<StyledBoxMessage>
				<StyledHeaderMessage>
					<StyledTitle>New self-defense class</StyledTitle>
					<p>15-02-2025</p>
				</StyledHeaderMessage>
				<StyledTextMessage>
					Attention everyone! 🚨 Starting this Monday, we are adding a new Self
					Defense class to our schedule. 🥋 This class is designed to learn
					quick and effective techniques for any risky situation. Dont miss it!
					Schedule: Mondays and Wednesdays at 7:00 PM. Registration open at the
					front desk.
				</StyledTextMessage>
			</StyledBoxMessage>
			<StyledBoxMessage>
				<StyledHeaderMessage>
					<StyledTitle>Schedule changes due to holidays</StyledTitle>
					<p>28-02-2025</p>
				</StyledHeaderMessage>
				<StyledTextMessage>
					Important! 📅 This Friday, due to the Independence Day holiday, the
					gym will have reduced hours. Morning classes will remain, but
					afternoon classes will be suspended. New Friday schedules: 8:00 AM -
					10:00 AM: Regular classes. 10:00 AM - 2:00 PM: Gym open for free
					practice. See you on the mat! 🔥
				</StyledTextMessage>
			</StyledBoxMessage>
		</>
	);
};

export default Message;
