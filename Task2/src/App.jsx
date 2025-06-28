import './App.css'
import Message from './components/Message/Message'
import PageTitle from './components/PageTitle/PageTitle'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
	return (
		<>
			<PageTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore!
			</PageTitle>
			<Message
				sender='Ilya'
				text='This is appThis application is developed using React library'
			/>
			<Wrapper>
				<PageTitle>Message Board</PageTitle>
				<Message sender='Mike' text='Привет! Как дела?' />
				<Message sender='Alice' text='Не забудь про встречу.' />
				<Message sender='System' text='У вас новое уведомление.' />
			</Wrapper>
		</>
	)
}

export default App
