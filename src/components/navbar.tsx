'use client';
import {
	DrawerBody,
	DrawerContent,
	DrawerRoot,
	DrawerTrigger,
	Flex,
	Heading,
	HStack,
	IconButton,
	Link,
	Spacer,
	useBreakpointValue,
} from '@chakra-ui/react';
import { Menu, User } from 'lucide-react';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';

const pageNameMap = {
	'/': 'Dashboard',
	'/tables': 'Tables',
};

export default function Navbar() {
	const showHamburger = useBreakpointValue({ base: true, lg: false });
	const pathname = usePathname() as keyof typeof pageNameMap;
	return (
		<Flex as='nav' alignItems='center' position='relative'>
			<Heading as='h1' fontSize='xl' fontWeight='bold'>
				{pageNameMap[pathname] ? pageNameMap[pathname] : 'Page Not Found'}
			</Heading>
			<Spacer />
			<HStack>
				<IconButton aria-label='Call support' variant='ghost'>
					<Link href='/'>
						<User />
					</Link>
				</IconButton>
				{showHamburger ? (
					<DrawerRoot size='full'>
						<DrawerTrigger asChild>
							<IconButton aria-label='Open menu' variant='ghost'>
								<Menu />
							</IconButton>
						</DrawerTrigger>
						<DrawerContent position='fixed' top={0} left={0} width='200px'>
							<DrawerBody marginTop='80px'>
								<Sidebar />
							</DrawerBody>
						</DrawerContent>
					</DrawerRoot>
				) : null}
			</HStack>
		</Flex>
	);
}
