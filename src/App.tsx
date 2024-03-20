import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import AsteroideId from "./components/AsteroideId/Asteroideid"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Asteroide/:id" element={<AsteroideId />} />
      </Routes>
    </Router>
  )
}

export default App
