//Задание IV
function randomGen(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const rootElement = document.getElementById('app')
const reactRootElement = ReactDOM.createRoot(rootElement)

let myName = 'Ilya'
let myFavoriteColor = 'Blue'

const randomNumber1 = randomGen(1, 100)
const randomNumber2 = randomGen(1, 100)

const h1 = React.createElement(
	'h1',
	{ className: 'page-title' },
	`Привет, меня зовут ${myName}, мой любимый цвет — ${myFavoriteColor}`,
)

const p = React.createElement(
	'p',
	{ className: 'value' },
	`${randomNumber1} + ${randomNumber2} = ${randomNumber1 + randomNumber2}`,
)

reactRootElement.render(
	<React.Fragment>
		{h1}
		{p}
	</React.Fragment>,
)
