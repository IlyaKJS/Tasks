import './FilterForm.css'

const FilterForm = props => {
	const { filterValues, setFilterValues, minAge, maxAge, minKids, maxKids } =
		props

	const handleChange = e => {
		const { name, value, type, checked } = e.target
		setFilterValues(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	return (
		<>
			<div className='filter-list'>
				<div className='filter-item'>
					<label htmlFor='name'>Имя:</label>
					<input
						className='filter-input'
						id='name'
						name='name'
						value={filterValues.name}
						onChange={handleChange}
					/>
				</div>
				<div className='filter-item'>
					<label htmlFor='minAge'>Минимальный возраст:</label>
					<input
						className='filter-input'
						type='number'
						id='minAge'
						name='minAge'
						min={minAge}
						max={maxAge}
						value={filterValues.minAge}
						onChange={handleChange}
					/>
				</div>
				<div className='filter-item'>
					<label>Максимальный возраст:</label>
					<input
						className='filter-input'
						type='number'
						name='maxAge'
						min={minAge}
						max={maxAge}
						value={filterValues.maxAge}
						onChange={handleChange}
					/>
				</div>
				<div className='filter-item'>
					<label htmlFor='kids'>Количество детей:</label>
					<input
						className='filter-input'
						type='number'
						id='kids'
						name='kids'
						min={minKids}
						max={maxKids}
						value={filterValues.kids}
						onChange={handleChange}
					/>
				</div>
				<div className='filter-item'>
					<label className='filter-checkbox' htmlFor='vaccinated'>
						Наличие прививки:
						<input
							type='checkbox'
							id='vaccinated'
							name='vaccinated'
							checked={filterValues.vaccinated}
							onChange={handleChange}
						/>
					</label>
				</div>
			</div>
		</>
	)
}

export default FilterForm
