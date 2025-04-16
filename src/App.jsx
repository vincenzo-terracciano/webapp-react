import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/movies/:id" Component={SingleMovie} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
