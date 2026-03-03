import type {RouteType} from "../../util/type/route.tsx";
import {RouteConstant} from "@/util/constants/routeConstant.ts";
import {NameEnum} from "@/util/enums/enum.ts";
import {LandingView} from "../../view/LandingView.tsx";
import {ExperienceView} from "@/view/ExperienceView.tsx";
import {ProjectView} from "@/view/ProjectView.tsx";
import {ContactView} from "@/view/ContactView.tsx";

export const dashboardRoute: RouteType[] = [
    {
        path: RouteConstant.dashboard.landing.path,
        name: NameEnum.LandingPage,
        element: <LandingView/>,
        metadata: {
            isProtected: false,
            hasSideBar: true,
            subtitle: "",
            hasForm: false
        },
    },
    {
        path: RouteConstant.dashboard.experience.path,
        name: NameEnum.Experience,
        element: <ExperienceView/>,
        metadata: {
            isProtected: false,
            hasSideBar: true,
            subtitle: "",
            hasForm: false
        },
    },
    {
        path: RouteConstant.dashboard.project.path,
        name: NameEnum.Project,
        element: <ProjectView/>,
        metadata: {
            isProtected: false,
            hasSideBar: true,
            subtitle: "",
            hasForm: false
        },
    },
    {
        path: RouteConstant.dashboard.contact.path,
        name: NameEnum.Contact,
        element: <ContactView/>,
        metadata: {
            isProtected: false,
            hasSideBar: true,
            subtitle: "",
            hasForm: false
        },
    },
]