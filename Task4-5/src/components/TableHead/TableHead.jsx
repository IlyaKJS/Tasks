const TableHead = ({ sortUsers, sortKey, sortDir }) => {
	const columnsHeader = [
		{ key: 'name', label: 'Имя' },
		{ key: 'surname', label: 'Фамилия' },
		{ key: 'age', label: 'Возраст' },
		{ key: 'gender', label: 'Пол' },
		{ key: 'kids', label: 'Количество детей' },
		{ key: 'vaccinated', label: 'Прививка от COVID-19' },
	]

	return (
		<>
			<thead className='table-head'>
				<tr className='table-head-row'>
					{columnsHeader.map(header => (
						<th
							key={header.key}
							className='table-head-cell'
							data-name={header.key}
							onClick={() => sortUsers(header.key)}>
							{header.label}
							{sortKey === header.key
								? sortDir === 'asc'
									? '▲'
									: sortDir === 'desc'
									? '▼'
									: sortDir === 'none'
									? ''
									: 'asc'
								: ''}
						</th>
					))}
				</tr>
			</thead>
		</>
	)
}

export default TableHead
