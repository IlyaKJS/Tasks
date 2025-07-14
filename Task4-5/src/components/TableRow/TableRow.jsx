import checkedLogo from '../../assets/checked.svg'
import uncheckedLogo from '../../assets/unchecked.svg'
import femaleLogo from '../../assets/female.svg'
import maleLogo from '../../assets/male.svg'
const TableRow = ({ patient }) => {
	const { name, surname, age, gender, kids, vaccinated } = patient
	return (
		<>
			<tr className='table-head-row'>
				<td className='table-head-cell'>{name}</td>
				<td className='table-head-cell'>{surname}</td>
				<td className='table-head-cell'>{age}</td>
				<td className='table-head-cell'>
					{gender === 'F' ? (
						<img
							className='svg'
							src={femaleLogo}
							alt={gender}
							width='20'
							height='20'
							loading='lazy'
						/>
					) : (
						<img
							className='svg'
							src={maleLogo}
							alt={gender}
							width='20'
							height='20'
							loading='lazy'
						/>
					)}
				</td>
				<td className='table-head-cell'>{kids}</td>
				<td className='table-head-cell'>
					{vaccinated ? (
						<img
							className='svg'
							src={checkedLogo}
							alt='Да'
							width='20'
							height='20'
							loading='lazy'
						/>
					) : (
						<img
							className='svg'
							src={uncheckedLogo}
							alt='Нет'
							width='20'
							height='20'
							loading='lazy'
						/>
					)}
				</td>
			</tr>
		</>
	)
}
export default TableRow
