import TableRow from '../TableRow/TableRow'

const TableBody = ({ patients }) => {
	let rowPatients = patients.map(patient => {
		return (
			<TableRow
				patient={patient}
				key={patient.name + patient.surname + patient.age + patient.kids}
			/>
		)
	})

	return (
		<>
			<tbody>{rowPatients}</tbody>
		</>
	)
}

export default TableBody
