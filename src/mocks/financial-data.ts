export const mockFetchFinancialData = () => {
	return [
		{
			name: "Today's Moneys",
			type: 'money',
			amount: 53000,
			change: 55,
			icon: 'wallet',
		},
		{
			name: "Today's Users",
			type: 'number',
			count: 2300,
			change: 5,
			icon: 'globe',
		},
		{
			name: 'New Clients',
			type: 'number',
			count: 3020,
			change: -14,
			icon: 'file',
		},
		{
			name: 'Total Sales',
			type: 'money',
			amount: 173000,
			change: 8,
			icon: 'shoppingCart',
		},
	];
};
