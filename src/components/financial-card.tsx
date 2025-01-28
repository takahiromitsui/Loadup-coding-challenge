import { mockFetchFinancialData } from '@/mocks/financial-data';
import { Card, Flex, Text } from '@chakra-ui/react';
import { Globe, Wallet, File, ShoppingCart } from 'lucide-react';
import { JSX } from 'react';

const iconMap: {
	[key: string]: JSX.Element;
} = {
	wallet: <Wallet />,
	globe: <Globe />,
	file: <File />,
	shoppingCart: <ShoppingCart />,
};

export default function FinancialCard(
	props: ReturnType<typeof mockFetchFinancialData>[number]
) {
	return (
		<Card.Root variant='elevated' className='rounded-xl'>
			<Card.Header>
				<Card.Title fontSize='lg' fontWeight='bold' color='gray.500'>
					{props.name}
				</Card.Title>
			</Card.Header>
			<Card.Body>
				<Flex align='center' justify={'space-between'}>
					<Flex align='center' gap={2}>
						<Text fontWeight='bold' fontSize='xl'>
							{props.type === 'money'
								? `$${props.amount?.toLocaleString()}`
								: props.count?.toLocaleString()}
						</Text>
					</Flex>
					<Flex align='center' gap={2}>
						<Text
							color={props.change > 0 ? 'green.500' : 'red.500'}
							fontWeight='bold'
						>
							{props.change > 0 ? '+' : ''}
							{props.change}%
						</Text>
						<div className='p-2 bg-teal-400 rounded'>{iconMap[props.icon]}</div>
					</Flex>
				</Flex>
			</Card.Body>
		</Card.Root>
	);
}
