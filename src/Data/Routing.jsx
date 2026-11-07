import * as Page_Routing from "../Pages/Page_Routing"
import { User_Roles } from '@/Data/Mock_Data/User_Roles'
import { Access } from '@/Data/Mock_Data/Access'
import RequestAuth from "@/Default_Layouts/RequestAuth";

export const Routings = [
    //Authentications
    {
        path: "/Sign-in/*",
        element: <RequestAuth Access={Access.PUBLIC} Role={null}><Page_Routing.Auth_Routing.Login /></RequestAuth>,
    },
    {
        path: "/Sign-up/*",
        element: <RequestAuth Access={Access.PUBLIC} Role={null}><Page_Routing.Auth_Routing.Signup /></RequestAuth>,
    },
    {
        path: "/Continue",
        element: <RequestAuth Access={Access.PUBLIC} Role={null}><Page_Routing.Auth_Routing.Continue /></RequestAuth>,
    },
    {
        path: "/Access_Denied",
        element: <RequestAuth Access={Access.PUBLIC} Role={null}><Page_Routing.Auth_Routing.Access_Denied /></RequestAuth>,
    },
    

    // SM Related pages
    {
        path: "/Dashboard",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.SM_Dashboard /></RequestAuth>,
    },
    {
        path: "/SM_Pages/Home",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.SM_Dashboard /></RequestAuth>,
    },
    {
        path: "/SM_Pages/Stock_Summary",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.Stock_Summary /></RequestAuth>,
    },
    {
        path: "/SM_Pages/Stock_Requests",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.Stock_Requests /></RequestAuth>,
    },
    {
        path: "/SM_Pages/Distribution_Run",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.Distribution_Runs /></RequestAuth>,
    },
    {
        path: "/SM_Pages/Return_Approvals",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.SM}><Page_Routing.SM_Routing.Return_Approvals /></RequestAuth>,
    },


    // FDO Related pages
    {
        path: "/FDO_Pages/Home",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.FDO}><Page_Routing.FDO_Routing.FDO_Dashboard /></RequestAuth>,
    },
    {
        path: "/FDO_Pages/Stock_Summary",
        element: <RequestAuth Access={Access.PROTECTED} Role={User_Roles.FDO}><Page_Routing.FDO_Routing.Stock_Summary /></RequestAuth>,
    },
];