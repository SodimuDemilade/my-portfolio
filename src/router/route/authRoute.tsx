import type {RouteType} from "../../util/type/route.tsx";
import {RouteConstant} from "@/util/constants/routeConstant.ts";
import {NameEnum} from "@/util/enums/enum.ts";
import {LoginView} from "../../view/LoginView.tsx";

export const authRoute: RouteType[] = [
    {
        path: RouteConstant.auth.login.path,
        name: NameEnum.Login,
        element: <LoginView/>,
        metadata: {
            isProtected: false,
            hasSideBar: false,
            subtitle: "Login to your account.",
            hasForm: true
        },
    },
]