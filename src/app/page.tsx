import FinancialCard from '@/components/financial-card';
import { mockFetchFinancialData } from '@/mocks/financial-data';
import { Box, SimpleGrid } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<SimpleGrid gap='10' minChildWidth='200px'>
				{mockFetchFinancialData().map((data, index) => (
					<FinancialCard key={index} {...data} />
				))}
			</SimpleGrid>
		</Box>
	);
}
