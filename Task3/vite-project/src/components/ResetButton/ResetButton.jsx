export default function ResetButton(props) {
	const { clickHandler } = props

	return (
		<>
			<button className='reset-button' type='button' onClick={clickHandler}>
				Сброс
			</button>
		</>
	)
}
