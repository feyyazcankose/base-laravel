import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { BurguerButton } from "./BurgerButton";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { UserDropdown } from "./UserDropdown";
import RouteSearcher from "./RouteSearcher";

interface Props {
    children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
    return (
        <div className="relative  flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar
                className="w-full"
                classNames={{
                    wrapper: "w-full max-w-full border-b border-default-100 ",
                }}
            >
                <NavbarContent className="md:hidden">
                    <BurguerButton />
                </NavbarContent>
                <NavbarContent className="w-full max-md:hidden">
                    <RouteSearcher />
                </NavbarContent>
                <NavbarContent
                    justify="end"
                    className="w-fit data-[justify=end]:flex-grow-0"
                >
                    <NotificationsDropdown />
                    <NavbarContent>
                        <UserDropdown />
                    </NavbarContent>
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    );
};
