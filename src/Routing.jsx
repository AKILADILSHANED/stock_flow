import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

const RoutingPaths = [
    {path:"/", element: <Login/>},
    {path:"/Dashboard", element: <Dashboard/>}
];

export default RoutingPaths;