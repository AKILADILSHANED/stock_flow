import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingPaths from "./Routing";
import Notfound from "./Pages/Not_Found/Notfound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          RoutingPaths.map((element) => (
            <Route key={element.path} path={element.path} element={element.element} />
          ))
        }
        <Route key="/Notfound" path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
