import * as Page_Routing from "../Pages/Page_Routing"

export const Routings = [
    //Authentications
    {
        path: "/", element: <Page_Routing.Auth_Routing.Login />
    },
    {
        path: "/signup", element: <Page_Routing.Auth_Routing.Signup />
    },

    //Common
    {
        path: "/Dashboard", element: <Page_Routing.SM_Routing.SM_Dashboard />
    },

    // SM Related pages
    {
        path: "/SM_Pages/Home", element: <Page_Routing.SM_Routing.SM_Dashboard />
    },
    {
        path: "/SM_Pages/Stock_Summary", element: <Page_Routing.SM_Routing.Stock_Summary />
    },
    {
        path: "/SM_Pages/Stock_Requests", element: <Page_Routing.SM_Routing.Stock_Requests />
    },
    {
        path: "/SM_Pages/Distribution_Run", element: <Page_Routing.SM_Routing.Distribution_Runs />
    },
    {
        path: "/SM_Pages/Return_Approvals", element: <Page_Routing.SM_Routing.Return_Approvals />
    },


    // SM Related pages
    {
        path: "/FDO_Pages/Stock_Summary", element: <Page_Routing.FDO_Routing.Stock_Summary />
    },
];