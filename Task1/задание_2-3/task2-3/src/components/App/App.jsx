import './App.css'
import generate_random_number from '../../utils/randomValue'

function App() {
	/* II-III */
	let myName = 'Ilya'
	let myFavoriteColor = 'Blue'

	const randomNumber1 = generate_random_number(1, 100)
	const randomNumber2 = generate_random_number(1, 100)

	return (
		<>
			<h1>
				Привет, меня зовут {myName}, мой любимый цвет — {myFavoriteColor}
			</h1>
			<p>
				{randomNumber1} + {randomNumber2} = {randomNumber1 + randomNumber2}
			</p>
		</>
	)
}

export default App
