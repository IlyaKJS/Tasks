import './PageTitle.css'

const PageTitle = props => {
	const { children } = props
	return (
		<>
			<h1 className='main-title'>{children}</h1>
		</>
	)
}
export default PageTitle
