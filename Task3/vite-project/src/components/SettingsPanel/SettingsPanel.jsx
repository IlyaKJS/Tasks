import { useState } from 'react'
import PreviewBox from '../PreviewBox/PreviewBox'
import ResetButton from '../ResetButton/ResetButton'
export default function SettingsPanel() {
	const [backgroundColor, setBackgroundColor] = useState('white')
	const [fontSize, setFontSize] = useState(16)
	const [fontWeight, setFontWeight] = useState(400)

	function handleColorChange(color) {
		setBackgroundColor(color)
		document.body.style.backgroundColor = color
	}
	function handleFontSizeChange(event) {
		setFontSize(Number(event.target.value))
		document.body.style.fontSize = `${String(event.target.value)}px`
	}
	function handleFontWeightChange(event) {
		setFontWeight(Number(event.target.value))
		document.body.style.fontWeight = Number(event.target.value)
	}
	function handleReset() {
		setBackgroundColor('white')
		setFontSize(16)
		setFontWeight(400)
		document.body.style = ''
	}
	return (
		<>
			<div className='settings-panel'>
				<h1 className='settings-title'>Панель настроек</h1>
				<div className='section'>
					<h3 className='section-label'>Выберите цвет:</h3>
					<div className='color-buttons'>
						<button
							className='color-button red'
							onClick={() => handleColorChange('red')}>
							Красный
						</button>
						<button
							className='color-button blue'
							onClick={() => handleColorChange('blue')}>
							Синий
						</button>
						<button
							className='color-button green'
							onClick={() => handleColorChange('green')}>
							Зеленый
						</button>
					</div>
				</div>
				<div className='section'>
					<h3 className='section-label'>Размер текста: {fontSize}px</h3>
					<input
						className='range-input'
						type='range'
						value={fontSize}
						min={12}
						max={36}
						step={1}
						onChange={handleFontSizeChange}
					/>
				</div>
				<div className='section'>
					<h3 className='section-label'>Толщина текста: {fontWeight}</h3>
					<input
						className='range-input'
						type='range'
						value={fontWeight}
						min={100}
						max={900}
						step={100}
						onChange={handleFontWeightChange}
					/>
				</div>
				<PreviewBox
					backgroundColor={backgroundColor}
					fontSize={fontSize}
					fontWeight={fontWeight}
				/>
				<ResetButton clickHandler={handleReset} />
			</div>
		</>
	)
}
