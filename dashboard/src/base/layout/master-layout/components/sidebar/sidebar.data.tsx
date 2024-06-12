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
        roles: `${ERole.ADMIN_VIEW}`,
    } as ISidebarItem,
    {
        id: "file-mananer",
        icon: (
            <Icon
                icon="gravity-ui:folder-fill"
                width="1.2rem"
                height="1.2rem"
                className="text-gray-400 dark:text-gray-200"
            />
        ),
        title: "Dosya Yöneticisi",
        to: "/dosya-yoneticisi",
        type: "single",
        roles: `${ERole.ADMIN_VIEW}`,
    } as ISidebarItem,
];
