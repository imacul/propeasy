export const mockProperties = [
  {
    id: '1',
    address: '123 Maple St, Springfield',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rent: 1500,
    tenant: {
      name: 'John Doe',
      phone: '555-1234',
    },
    maintenanceRequests: [
      { id: 'm1', issue: 'Leaky Faucet', status: 'Completed' },
      { id: 'm2', issue: 'Broken Window', status: 'In Progress' },
    ],
  },
  {
    id: '2',
    address: '456 Oak Ave, Shelbyville',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rent: 1850,
    tenant: {
      name: 'Jane Smith',
      phone: '555-5678',
    },
    maintenanceRequests: [
      { id: 'm3', issue: 'AC not cooling', status: 'Open' },
    ],
  },
];
