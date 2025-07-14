import { useEffect, useState } from 'react'
import patientsData from './data/patients.json'
import './App.css'
import Table from './components/Table/Table'
import FilterForm from './components/FilterForm/FilterForm'
import Pagination from './components/Pagination/Pagination'

function App() {
	//-----------------------------Состояния------------------------------------------------

	const [patients, setPatients] = useState(() => {
		const savedPatients = JSON.parse(localStorage.getItem('patients'))
		return savedPatients ? savedPatients : []
	})
	const [sortedPatients, setSortedPatients] = useState(() => {
		const savedSortedPatients = JSON.parse(
			localStorage.getItem('sortedPatients'),
		)
		return savedSortedPatients ? savedSortedPatients : []
	})

	const [sortKey, setSortKey] = useState(() => {
		const savedSortKey = localStorage.getItem('sortKey')
		return savedSortKey ? savedSortKey : 'none'
	})
	const [sortDir, setSortDir] = useState(() => {
		const savedSortDir = localStorage.getItem('sortDir')
		return savedSortDir ? savedSortDir : 'none'
	})
	const [filterValues, setFilterValues] = useState(() => {
		const savedFilterValues = JSON.parse(localStorage.getItem('filterValues'))
		return savedFilterValues
			? savedFilterValues
			: {
					name: '',
					minAge: '',
					maxAge: '',
					kids: '',
					vaccinated: false,
			  }
	})

	const [currentPage, setCurrentPage] = useState(() => {
		const savedCurrentPage = localStorage.getItem('currentPage')

		return savedCurrentPage ? savedCurrentPage : 1
	})
	console.log('Текущая страница', currentPage)

	const [itemsPerPage, setItemsPerPage] = useState(() => {
		const savedItemsPerPage = localStorage.getItem('itemsPerPage')
		return savedItemsPerPage ? savedItemsPerPage : 10
	})
	const [currentPageItems, setCurrentPageItems] = useState(() => {
		const savedCurrentPageItems = JSON.parse(
			localStorage.getItem('currentPageItems'),
		)
		return savedCurrentPageItems ? savedCurrentPageItems : []
	})
	const [filteredPatients, setFilteredPatients] = useState(() => {
		const savedFilteredPatients = JSON.parse(
			localStorage.getItem('filteredPatients'),
		)
		return savedFilteredPatients ? savedFilteredPatients : []
	})

	const [minAge, setMinAge] = useState(() => {
		const savedMinAge = localStorage.getItem('minAge')
		return savedMinAge ? savedMinAge : 0
	})
	const [maxAge, setMaxAge] = useState(() => {
		const savedMaxAge = localStorage.getItem('maxAge')
		return savedMaxAge ? savedMaxAge : 0
	})
	const [minKids, setMinKids] = useState(() => {
		const savedMinKids = localStorage.getItem('minKids')
		return savedMinKids ? savedMinKids : 0
	})
	const [maxKids, setMaxKids] = useState(() => {
		const savedMaxKids = localStorage.getItem('maxKids')
		return savedMaxKids ? savedMaxKids : 0
	})

	//-----------------------------Конец состояний------------------------------------------------

	//-----------------------Отслеживание жизненого цикла и побочные эффекты состояний----------------------
	useEffect(() => {
		const newMinAge = patientsMin(patients, 'age')
		const newMaxAge = patientsMax(patients, 'age')
		const newMinKids = patientsMin(patients, 'kids')
		const newMaxKids = patientsMax(patients, 'kids')

		setMinAge(newMinAge)
		setMaxAge(newMaxAge)
		setMinKids(newMinKids)
		setMaxKids(newMaxKids)
		if (minAge !== Infinity && maxAge !== Infinity) {
			setFilterValues(() => ({
				name: '',
				minAge: minAge,
				maxAge: maxAge,
				kids: minKids,
				vaccinated: false,
			}))
		}
	}, [minAge, maxAge, patients, minKids])

	useEffect(() => {
		setPatients(patientsData)
		setSortedPatients(patientsData)
		const patientToSort = [...patients].sort((a, b) => {
			if (sortDir === 'asc') {
				return a[sortKey] > b[sortKey] ? 1 : -1
			} else if (sortDir === 'desc') {
				return a[sortKey] < b[sortKey] ? 1 : -1
			}
			return 0
		})

		setSortedPatients(patientToSort)
	}, [patients, sortKey, sortDir])

	useEffect(() => {
		const patientsToFilters = [...sortedPatients].filter(patient => {
			const currentName =
				patient.name.toLowerCase().includes(filterValues.name.toLowerCase()) ||
				patient.surname.toLowerCase().includes(filterValues.name.toLowerCase())
			const currentMinAge = filterValues.minAge
				? patient.age >= filterValues.minAge
				: true
			const currentMaxAge = filterValues.maxAge
				? patient.age <= filterValues.maxAge
				: true
			const currentKids = filterValues.kids
				? patient.kids === Number(filterValues.kids)
				: true
			const currentVaccinated = filterValues.vaccinated
				? patient.vaccinated
				: true

			return (
				currentName &&
				currentMinAge &&
				currentMaxAge &&
				currentKids &&
				currentVaccinated
			)
		})
		setFilteredPatients(patientsToFilters)
		setCurrentPage(1)
	}, [filterValues, sortedPatients])

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage
		const indexOfFirstItem = indexOfLastItem - itemsPerPage
		setCurrentPageItems(
			filteredPatients.slice(indexOfFirstItem, indexOfLastItem),
		)
	}, [currentPage, itemsPerPage, filteredPatients])

	useEffect(() => {
		localStorage.setItem('sortKey', sortKey)
		localStorage.setItem('sortDir', sortDir)
		localStorage.setItem('minAge', minAge)
		localStorage.setItem('maxAge', maxAge)
		localStorage.setItem('minKids', minKids)
		localStorage.setItem('maxKids', maxKids)
		localStorage.setItem('filterValues', JSON.stringify(filterValues))
		localStorage.setItem('currentPage', currentPage)
		localStorage.setItem('itemsPerPage', itemsPerPage)
		localStorage.setItem('currentPageItems', JSON.stringify(currentPageItems))
		localStorage.setItem('filteredPatients', JSON.stringify(filteredPatients))
		localStorage.setItem('sortedPatients', JSON.stringify(sortedPatients))
		localStorage.setItem('patients', JSON.stringify(patients))
		// console.log(localStorage)
	}, [
		sortKey,
		sortDir,
		filterValues,
		minAge,
		maxAge,
		minKids,
		maxKids,
		currentPage,
		itemsPerPage,
		currentPageItems,
		filteredPatients,
		sortedPatients,
		patients,
	])

	//-----------------------------Конец отслеживания состояний---------------------------------------------------

	//-----------------------------Утилитарные функции, обработчики событий и прочее ---------------------------------------------------
	function patientsMin(arr, nameProp) {
		return Math.min(...arr.map(patient => patient[nameProp]))
	}
	function patientsMax(arr, nameProps) {
		return Math.max(...arr.map(patient => patient[nameProps]))
	}
	const sortUsers = key => {
		let direction = 'asc'
		if (key === sortKey) {
			direction =
				sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? 'none' : 'asc'
		}
		setSortKey(key)
		setSortDir(direction)
	}

	const handleResetFilters = () => {
		const newMinAge = patientsMin(patients, 'age')
		const newMaxAge = patientsMax(patients, 'age')
		const newMinKids = patientsMin(patients, 'kids')
		const newMaxKids = patientsMax(patients, 'kids')
		setMinAge(newMinAge)
		setMaxAge(newMaxAge)
		setMinKids(newMinKids)
		setMaxKids(newMaxKids)
		if (minAge !== Infinity && maxAge !== Infinity) {
			setFilterValues({
				name: '',
				minAge: newMinAge,
				maxAge: newMaxAge,
				kids: newMinKids,
				vaccinated: false,
			})
		}
	}
	const handleClearLocalStorage = () => {
		localStorage.clear()
		setSortKey('none')
		setSortDir('none')
		setCurrentPage(1)
		setItemsPerPage(10)
		setFilterValues({
			name: '',
			minAge: minAge,
			maxAge: maxAge,
			kids: minKids,
			vaccinated: false,
		})
	}

	const handleItemsPerPageChange = e => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}
	const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)
	//-----------------------------Конец утилитарных функций, обработчиков событий и прочего----------------------------------------
	return (
		<>
			<div className='app-wrapper'>
				<h1 className='app-title'>Список пациентов</h1>
				<FilterForm
					filterValues={filterValues}
					setFilterValues={setFilterValues}
					minAge={minAge}
					maxAge={maxAge}
					minKids={minKids}
					maxKids={maxKids}
				/>
				<button
					type='button'
					onClick={handleResetFilters}
					className='reset-button'>
					Сбросить фильтры
				</button>
				<button
					type='button'
					onClick={handleClearLocalStorage}
					className='clear-storage-button'>
					Очистить сохранённые данные
				</button>
				<Table
					listPatients={currentPageItems}
					sortUsers={sortUsers}
					sortKey={sortKey}
					sortDir={sortDir}
				/>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					setCurrentPage={setCurrentPage}
					itemsPerPage={itemsPerPage}
					handleItemsPerPageChange={handleItemsPerPageChange}
				/>
			</div>
		</>
	)
}

export default App
