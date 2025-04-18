import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./components/NotFound"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AuthLayout from "./layouts/AuthLayout"
import Admin from "./pages/Admin"
import CreateMovie from "./pages/CreateMovie"

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

            <Route Component={AuthLayout}>
              <Route path="/admin" Component={Admin} />
              <Route path="/admin/movies/create" Component={CreateMovie} />

            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
