import './App.css'

function App() {
	/* II-III */
	let myName = 'Ilya'
	let myFavoriteColor = 'Blue'

	function randomGen(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const randomNumber1 = randomGen(1, 100)
	const randomNumber2 = randomGen(1, 100)

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
