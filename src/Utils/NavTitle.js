export const routes = [
    {
        title: 'Marketplace',
        path: "/",
        main: () => <h1> Marketplace</h1>,
        exact: true,
    },
    {
        title: 'Merchants',
        path: "/merchants",
        main: () => <h1>Merchants</h1>,
    },
    {
        title: 'My Wallet',
        path: "/my-wallet",
        main: () => <h1>My Wallet</h1>
    },
    {
        title: 'My Vouchers',
        path: "/my-vouchers",
        main: () => <h1>My Vouchers</h1>,
    },
    {
        title: 'Depleted Vouchers',
        path: "/depleted-vouchers",
        main: () => <h1>Depleted Vouchers</h1>
    },
    {
        title: 'Settings',
        path: "/settings",
        main: () => <h1>Settings</h1>
    }
]