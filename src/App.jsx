import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"


function App() {
 

  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ws2" element={<Page1 />} />
          <Route path="ws3" element={<Page2 />} />
          <Route path="ws4" element={<Page3 />} />
        </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
