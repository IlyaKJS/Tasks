const Pagination = props => {
	const {
		currentPage,
		totalPages,
		setCurrentPage,
		itemsPerPage,
		handleItemsPerPageChange,
	} = props
	const handlePageChange = page => {
		setCurrentPage(page)
	}
	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(
			<li
				key={i}
				className={`pagination-list-item ${currentPage === i ? 'active' : ''}`}
				onClick={() => handlePageChange(i)}>
				{i}
			</li>,
		)
	}

	return (
		<>
			<div className='pagination-wrapper'>
				<select
					className='pagination-select'
					value={itemsPerPage}
					onChange={handleItemsPerPageChange}>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
				</select>
				<ul className='pagination-list-wrapper'>
					<li
						className='pagination-list-item'
						onClick={() =>
							handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
						}>
						« Пред
					</li>
					{pageNumbers}
					<li
						className='pagination-list-item'
						onClick={() =>
							handlePageChange(
								currentPage < totalPages ? currentPage + 1 : totalPages,
							)
						}>
						След »
					</li>
				</ul>
			</div>
		</>
	)
}

export default Pagination
