import './Wrapper.css'

const Wrapper = props => {
	const { children } = props
	return (
		<>
			<div className='layout-wrapper'>{children}</div>
		</>
	)
}
export default Wrapper
