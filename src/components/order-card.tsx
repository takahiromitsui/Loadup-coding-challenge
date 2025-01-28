import { mockFetchOrderData } from '@/mocks/order-data';
import { Card } from '@chakra-ui/react';
import {
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineItem,
	TimelineRoot,
	TimelineTitle,
} from '@/components/ui/timeline';

type Order = ReturnType<typeof mockFetchOrderData>[number];

type OrderCardProps = {
	props: Order[];
};

function formatDate(dateString: string) {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date
		.toLocaleString('default', { month: 'short' })
		.toUpperCase();
	const time = date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});
	return `${day} ${month} ${time}`;
}

export default function OrderCard({ props }: OrderCardProps) {
	return (
		<Card.Root variant='elevated' className='rounded-xl'>
			<Card.Header>
				<Card.Title fontSize='lg' fontWeight='bold'>
					Orders Overview
				</Card.Title>
			</Card.Header>
			<Card.Body>
				<TimelineRoot size='sm' variant='solid'>
					{props.map((order, index) => (
						<TimelineItem key={index}>
							<TimelineConnector borderColor='gray.200'></TimelineConnector>
							<TimelineContent flex='1'>
								<TimelineTitle fontSize='sm' fontWeight='bold'>
									{order.description}
								</TimelineTitle>
								<TimelineDescription fontSize='sm' color='gray.500'>
									{formatDate(order.dateTime)}
								</TimelineDescription>
							</TimelineContent>
						</TimelineItem>
					))}
				</TimelineRoot>
			</Card.Body>
		</Card.Root>
	);
}
