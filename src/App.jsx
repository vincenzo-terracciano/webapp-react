import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./components/NotFound"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {

  const [loading, setLoading] = useState(true)

  return (
    <>
      <GlobalContext.Provider value={{ loading, setLoading }} >
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/movies/:id" Component={SingleMovie} />
              <Route path="/*" Component={NotFound} />
              <Route path="/register" Component={Register} />
              <Route path="/login" Component={Login} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
