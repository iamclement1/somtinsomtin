export const routes = [
    {
        title: 'Marketplace',
        path: "/",
        sidebar: () => <div>Marketplace</div>,
        main: () => <h1> Marketplace</h1>,
        exact: true,
    },
    {
        title: 'Merchants',
        path: "/merchants",
        sidebar: () => <div>Merchants</div>,
        main: () => <h1>Merchants</h1>,
    },
    {
        title: 'My Wallet',
        path: "/my-wallet",
        sidebar: () => <div>My Wallet</div>,
        main: () => <h1>My Wallet</h1>
    },
    {
        title: 'My Vouchers',
        path: "/my-vouchers",
        sidebar: () => <div>My Vouchers</div>,
        main: () => <h1>My Vouchers</h1>,
    },
    {
        title: 'Depleted Vouchers',
        path: "/depleted-vouchers",
        sidebar: () => <div>Depleted Vouchers</div>,
        main: () => <h1>Depleted Vouchers</h1>
    },
    {
        title: 'Settings',
        path: "/settings",
        sidebar: () => <div>Settings</div>,
        main: () => <h1>Settings</h1>
    }
]