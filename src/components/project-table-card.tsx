import { mockFetchProjectData } from '@/mocks/project-data';
import { Card, Table } from '@chakra-ui/react';

type projectItem = ReturnType<typeof mockFetchProjectData>[number];

type ProjectTableCardProps = {
	props: projectItem[];
};

export default function ProjectTableCard({ props }: ProjectTableCardProps) {
	return (
		<Card.Root variant='elevated' className='rounded-xl'>
			<Card.Header>
				<Card.Title fontSize='lg' fontWeight='bold'>
					Projects Table
				</Card.Title>
			</Card.Header>
			<Card.Body>
				<Table.Root variant='line' size='lg' interactive>
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeader color='gray.500' fontWeight='bold'>
								COMPANIES
							</Table.ColumnHeader>
							<Table.ColumnHeader color='gray.500' fontWeight='bold'>
								{' '}
								BUDGET
							</Table.ColumnHeader>
							<Table.ColumnHeader color='gray.500' fontWeight='bold'>
								COMPLETION
							</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{props.map(item => (
							<Table.Row key={item.company}>
								<Table.Cell>{item.company}</Table.Cell>
								<Table.Cell fontWeight='bold'>${item.budget}</Table.Cell>
								<Table.Cell fontWeight='bold' className='text-teal-400'>
									{item.completion}%
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Card.Body>
		</Card.Root>
	);
}
