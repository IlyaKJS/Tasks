import './Message.css'

const Message = props => {
	const { sender, text } = props
	return (
		<>
			<div className='message'>
				<h3>Сообщение от {sender}</h3>
				<p>{text}</p>
			</div>
		</>
	)
}
export default Message
