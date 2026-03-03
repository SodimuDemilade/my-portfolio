import {ReactNode, useState} from "react";
import "./dashboard.css";
import Sidebar from "@/component/ui/menu/SidebarMenu.tsx";
import {Backdrop, MobileMenuButton} from "@/component/ui/menu/MobileMenuButton.tsx";

type DashboardLayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        // <div className="mainContainer">
        //     <div className="sidebar">
        //         <SidebarMenu/>
        //     </div>
        //
        //     <div className="content">
        //         <div>
        //             <HeaderMenu title={title} subtitle={subtitle}/>
        //         </div>
        //         <div className={"mainContent"}>
        //             {children}
        //         </div>
        //     </div>
        // </div>
        <div className={"dashboardContent"} style={{width: '90vw'}}>
            <MobileMenuButton onClick={() => setSidebarOpen(!sidebarOpen)}/>
            <Sidebar isOpen={sidebarOpen}/>
            <Backdrop
                show={sidebarOpen}
                onClick={() => setSidebarOpen(false)}
            />
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                {children}
            </div>
        </div>
    );
};
