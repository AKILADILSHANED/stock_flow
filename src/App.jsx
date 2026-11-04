import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Routings } from "./Data/Routing"
import Not_Found from "./Pages/Auth_Pages/Not_Found/Index"
import { Clerk_Provider } from '../Providers/Clerk_Provider'


function App() {

  return (
    <BrowserRouter>
      <Clerk_Provider>
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
      </Clerk_Provider>
    </BrowserRouter>
  )
}

export default App
