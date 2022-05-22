import { faStores, faShops, faWallet } from '@fontawesome/free-solid-svg-icons';
import { faGears, faGifts } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarData = [
    { 
        title: "Market Place",
        icon: <FontAwesomeIcon icon={ faStores } />,
        link: "/marketplace"
    },
    {
        title: "Merchants",
        icon: <FontAwesomeIcon icon={ faShops } />,
        link: "/merchants",
    },
    {
        title: "My Wallet",
        icon: <FontAwesomeIcon icon={ faWallet } />,
        link: "/wallet",
    },
    {
        title: "My Vouchers",
        icon: <FontAwesomeIcon icon={ faGifts } />,
        link: "/voucher",
    },
    {
        title: "Depleted Vouchers",
        icon: <FontAwesomeIcon icon={ faGifts } />,
        link: "/depleted-vouchers"
    },
    {
        title: " Settings ",
        icon: <FontAwesomeIcon icon={ faGears } />,
        link: "/settings"
    }
]