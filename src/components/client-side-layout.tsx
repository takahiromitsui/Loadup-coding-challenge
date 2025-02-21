'use client';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Sidebar from './sidebar';
import Navbar from './navbar';

export default function ClientSideLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const showSidebar = useBreakpointValue({ base: false, lg: true });
	return (
		<Grid templateColumns='repeat(6, 1fr)'>
			{showSidebar ? (
				<GridItem
					as='aside'
					colSpan={{
						base: 6,
						lg: 2,
						xl: 1,
					}}
					bg='gray.100'
					minHeight={{
						lg: '100vh',
					}}
					p={{
						base: '20px',
						lg: '40px',
					}}
				>
					<Sidebar />
				</GridItem>
			) : null}

			<GridItem
				as='main'
				colSpan={{
					base: 6,
					lg: 4,
					xl: 5,
				}}
				p='40px'
				overflowY='auto'
			>
				<Navbar />
				<div className='mt-8'>{children}</div>
			</GridItem>
		</Grid>
	);
}
