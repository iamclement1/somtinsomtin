export const routes = [
    {
        title: 'Marketplace',
        path: "/",
        main: () => <h2> Marketplace</h2>,
        sidebar: () => <div>Marketplace</div>,
        exact: true,
    },
    {
        title: 'Merchants',
        path: "/merchants",
        main: () => <h2>Merchants</h2>,
        sidebar: () => <div>Merchants</div>,
    },
    {
        title: 'My Wallet',
        path: "/my-wallet",
        main: () => <h2>My Wallet</h2>,
        sidebar: () => <div>My Wallet</div>
    },
    {
        title: 'My Vouchers',
        path: "/my-vouchers",
        main: () => <h2>My Vouchers</h2>,
        sidebar: () => <div>My Vouchers</div>
    },
    {
        title: 'Depleted Vouchers',
        path: "/depleted-vouchers",
        main: () => <h2>Depleted Vouchers</h2>,
        sidebar: () => <div>Depleted Vouchers</div>
    },
    {
        title: 'Settings',
        path: "/settings",
        main: () => <h2>Settings</h2>,
        sidebar: () => <div>Settings</div>
    }
]