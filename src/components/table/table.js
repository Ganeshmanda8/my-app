import './table.css'

const data = [
	{ format: "Tests", matches: 113,innings:191, runs:8848, hundred:29,fifties:30, highest:'254*' },
	{ format: "ODIs", matches: 292,innings:280, runs:13848, hundred:50,fifties:72, highest:'183'},
	{ format: "T20Is", matches: 117,innings:109, runs:4037, hundred:1,fifties:37, highest:'122*'},
	{ format: "T20s", matches: 245,innings:237, runs:7642, hundred:8,fifties:52, highest:'113'}
]

function TableDataComponent() {
	return (
		<div className="App">
			<table border='1' >
				<tr>
					<th>Format</th>
					<th>Matches</th>
					<th>Innings</th>
					<th>Runs</th>
					<th>Hundred</th>
					<th>Fifties</th>
					<th>Highest</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.format}</td>
							<td>{val.matches}</td>
							<td>{val.innings}</td>
							<td>{val.runs}</td>
							<td>{val.hundred}</td>
							<td>{val.fifties}</td>
							<td>{val.highest}</td>
						</tr>
					)
				})}
			</table>
		</div>
	);
}

export default TableDataComponent;
