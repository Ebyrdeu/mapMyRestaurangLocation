import {Badge, Group, Text, useMantineTheme} from "@mantine/core";

export const Content = ({children, coordinates, title, desc, id, createdBy, city}) => {
	const theme = useMantineTheme();
	return (<tr >
		<td>
			<Group spacing="sm">
				<div>
					<Text size="sm" weight={500}>
						{title}
					</Text>
					<Text color="dimmed" size="xs">
						{id}
					</Text>
				</div>
			</Group>
		</td>

		<td>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<Badge style={{width: 160}}
				       variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
					{coordinates._lat}° N
				</Badge>
				<Badge
					style={{marginTop: 5, width: 160}}
					variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
					{coordinates._long}° E
				</Badge>
			</div>
		</td>
		<td>
			{desc}
		</td>
		<td>
			{city}
		</td>
		<td>
			{createdBy}
		</td>
		<td>
			<Group spacing={0} position="right">
				{children}
			</Group>
		</td>
	</tr>);
};