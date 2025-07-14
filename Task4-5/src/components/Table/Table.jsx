import TableBody from '../TableBody/TableBody'
import TableHead from '../TableHead/TableHead'

const Table = props => {
	const { listPatients, sortUsers, sortKey, sortDir } = props

	return (
		<>
			<table className='patient-table'>
				<TableHead sortUsers={sortUsers} sortKey={sortKey} sortDir={sortDir} />
				<TableBody patients={listPatients} />
			</table>
		</>
	)
}

export default Table
