import FinancialCard from '@/components/financial-card';
import OrderCard from '@/components/order-card';
import { mockFetchFinancialData } from '@/mocks/financial-data';
import { mockFetchOrderData } from '@/mocks/order-data';
import { Box, SimpleGrid } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<SimpleGrid gap='4' minChildWidth='200px'>
				{mockFetchFinancialData().map((data, index) => (
					<FinancialCard key={index} {...data} />
				))}
			</SimpleGrid>
			<Box mt={8}>
				<SimpleGrid gap='10' minChildWidth='200px'>
					<OrderCard props={mockFetchOrderData()} />
				</SimpleGrid>
			</Box>
		</Box>
	);
}
