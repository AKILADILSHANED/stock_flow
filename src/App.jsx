import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Routings } from "./Data/Routing"
import Not_Found from "./Pages/Auth_Pages/Not_Found/Index"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          Routings.map((element) => {
            return (
              <Route key={element.path} path={element.path} element={element.element} />
            )
          })
        }
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
