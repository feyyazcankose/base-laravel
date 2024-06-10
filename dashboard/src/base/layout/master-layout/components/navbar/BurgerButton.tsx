import { StyledBurgerButton } from "./navbar.styles";
import { useSidebarContext } from "@base/layout/contexts/LayoutContext";

export const BurguerButton = () => {
    const { collapsed, setCollapsed } = useSidebarContext();
    console.log(collapsed);
    return (
        <div
            className={StyledBurgerButton()}
            // open={collapsed}
            onClick={setCollapsed}
        >
            <div />
            <div />
        </div>
    );
};
