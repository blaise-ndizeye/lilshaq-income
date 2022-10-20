import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel"
import Hotels from "./pages/hotels/Hotels"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:hotel_id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
