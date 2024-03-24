import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import AsteroideId from "./components/AsteroideId/Asteroideid"
import NoFound from "./components/NoFound/NoFound"
import Apod from "./components/Apod/Apod"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Asteroide/:id" element={<AsteroideId />} />
        <Route path="/Apod" element={<Apod />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Router>
  )
}

export default App
