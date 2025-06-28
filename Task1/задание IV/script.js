//

const rootElement = document.getElementById('app')

const reactRootElement = ReactDOM.createRoot(rootElement)

React.createElement('', {}, '')

reactRootElement.render(<h1>Text</h1>)

/* Использование чистого React
	1) В index.html подключите React, ReactDOM, Babel
	2) Подключите script.js, не забудьте указать type
	3) Создайте корневой элемент ReactDOM.createRoot()
	4) Повторите задание II, используя React.createElement()
	5) Повторите задание III, используя JSX
	6) Используйте .render() для корневого элемента, и выведите на экран результаты 4) и 5) пункта, обернув их в React.Fragment */
