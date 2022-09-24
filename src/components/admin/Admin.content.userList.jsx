export const AdminContentUserList = ({data}) => {

	// Render User List
	const renderLocationData = data.map(({displayName, email, id}) => (
		<tr key={id}>
			<td>
				{displayName}
				<p style={{fontSize: '11px'}}>{id}</p>
			</td>
			<td children={email}/>
		</tr>

	));

	return (
		<tbody>
		{renderLocationData}
		</tbody>
	);
};

