import { faBoxOpen, faGears, faGift, faGifts, faStore, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menus = [
    {
        title: 'Market Place',
        icon: <FontAwesomeIcon icon={faStore} />,
        link: "/",
        gap: true,
    },
    {
        title: 'Merchants',
        icon: <FontAwesomeIcon icon={faBoxOpen} />,
        link: "/merchants",
        gap: true,
    },
    {
        title: 'My Wallet',
        icon: <FontAwesomeIcon icon={faWallet} />,
        link: "/my-wallet",
        gap: true,
    },
    {
        title: 'My Vouchers',
        icon: <FontAwesomeIcon icon={faGifts} />,
        link: "/my-voucher",
        gap: true,
    },
    {
        title: 'Depleted Vouchers',
        icon: <FontAwesomeIcon icon={faGift} />,
        link: "/depleted-voucher",
        gap: true,
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGears} />,
        link: "/settings",
        gap: true,

    }
]