import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarItem,
} from "@nextui-org/react";
import { useAuth } from "@app/modules/auth/core/contexts/AuthContext";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Link } from "react-router-dom";
export const UserDropdown = () => {
    const { currentUser, logout } = useAuth();
    return (
        <Dropdown backdrop="blur">
            <NavbarItem>
                <DropdownTrigger>
                    <Avatar
                        as="button"
                        color="success"
                        name={
                            currentUser?.name?.charAt(0) ??
                            "" + currentUser?.name.split(" ")?.[1]?.charAt(0) ??
                            ""
                        }
                        showFallback
                        size="md"
                    />
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="User menu actions"
                onAction={(actionKey) => console.log({ actionKey })}
            >
                <DropdownItem
                    key="profile"
                    className="flex flex-col justify-start w-full items-start"
                >
                    <p>Olarak giriş yapıldı</p>
                    <p>{currentUser?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    <Link to="/hesabim">Hesabım</Link>
                </DropdownItem>
                <DropdownItem
                    onClick={() =>
                        logout({
                            alert: true,
                        })
                    }
                    key="logout"
                    color="danger"
                    className="text-danger "
                >
                    Çıkış Yap
                </DropdownItem>
                <DropdownItem key="switch">
                    <DarkModeSwitch />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
