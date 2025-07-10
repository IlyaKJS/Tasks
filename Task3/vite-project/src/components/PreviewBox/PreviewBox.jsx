export default function PreviewBox(props) {
	const { backgroundColor, fontSize, fontWeight } = props
	return (
		<>
			<div className='preview-box'>
				<h2> Пример оформления</h2>
				<div className='preview-info'>
					<p>
						Цвет: {backgroundColor} | Размер: {fontSize}px | Стиль: {fontWeight}
					</p>
				</div>
			</div>
		</>
	)
}
