'use client';
import { Flex, List } from '@chakra-ui/react';
import { ChartColumn, House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
	{
		name: 'Dashboard',
		href: '/',
		icon: House,
	},
	{
		name: 'Tables',
		href: '/tables',
		icon: ChartColumn,
	},
];
export default function Sidebar() {
	const pathname = usePathname();

	return (
		<List.Root gap={8}>
			{sidebarItems.map(item => (
				<List.Item
					key={item.name}
					className={`p-2 rounded ${pathname === item.href ? 'bg-white' : ''}`}
				>
					<Link href={item.href} className='font-bold'>
						<Flex align='center' gap={2}>
							<item.icon
								size={24}
								className={`p-1 rounded  ${
									pathname === item.href
										? 'bg-teal-400 text-white'
										: 'bg-transparent'
								}`}
							/>
							{item.name}
						</Flex>
					</Link>
				</List.Item>
			))}
		</List.Root>
	);
}
