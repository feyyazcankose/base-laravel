import { Icon } from "@iconify/react/dist/iconify.js";
import {
    ICollapseItem,
    ISidebarItem,
    ISidebarMenu,
} from "./sidebar.interfaces";
import { ERole } from "@base/enums/role.enum";

export const sidebarData: (ISidebarItem | ICollapseItem | ISidebarMenu)[] = [
    {
        id: "home",
        title: "Ana Sayfa",
        type: "single",
        icon: (
            <Icon
                icon="ic:round-dashboard"
                width="1.2rem"
                height="1.2rem"
                className="text-gray-400 dark:text-gray-200"
            />
        ),
        to: "/anasayfa",
        roles: `${ERole.Public}`,
    } as ISidebarItem,
    {
        id: "admin",
        icon: (
            <Icon
                icon="mdi:accounts"
                width="1.2rem"
                height="1.2rem"
                className="text-gray-400 dark:text-gray-200"
            />
        ),
        title: "Yöneticiler",
        to: "/yoneticiler",
        type: "single",
        roles: `${ERole.AdminView}`,
    } as ISidebarItem,
    // {
    //     id: "main-menu",
    //     title: "Modüller",
    //     type: "menu",
    //     items: [
    //         {
    //             id: "admin",
    //             icon: (
    //                 <Icon
    //                     icon="mdi:accounts"
    //                     width="1.2rem"
    //                     height="1.2rem"
    //                     className="text-gray-400 dark:text-gray-200"
    //                 />
    //             ),
    //             title: "Yöneticiler",
    //             to: "/yoneticiler",
    //             type: "single",
    //         } as ISidebarItem,
    //         {
    //             id: "balances",
    //             icon: (
    //                 <Icon
    //                     icon="ic:baseline-account-balance-wallet"
    //                     width="1.2rem"
    //                     height="1.2rem"
    //                     className="text-gray-400 dark:text-gray-200"
    //                 />
    //             ),
    //             title: "Balances",
    //             items: [
    //                 {
    //                     id: "bank-accounts",
    //                     title: "Banks Accounts",
    //                     to: "/banks-accounts",
    //                 },
    //                 {
    //                     id: "credit-cards",
    //                     title: "Credit Cards",
    //                     to: "/credit-cards",
    //                 },
    //                 {
    //                     id: "loans",
    //                     title: "Loans",
    //                     to: "/loans",
    //                 },
    //             ],
    //             type: "collapse",
    //         } as ICollapseItem,
    //     ],
    // } as ISidebarMenu,
];
