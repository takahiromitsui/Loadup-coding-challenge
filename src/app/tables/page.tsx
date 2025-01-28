import ProjectTableCard from '@/components/project-table-card';
import { mockFetchProjectData } from '@/mocks/project-data';
import { SimpleGrid } from '@chakra-ui/react';

export default function Tables() {
	return (
		<SimpleGrid gap='10' minChildWidth='200px'>
			<ProjectTableCard props={mockFetchProjectData()} />
		</SimpleGrid>
	);
}
