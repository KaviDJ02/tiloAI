import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import Page5 from "./pages/page5.jsx";
import Page6 from "./pages/Page6.jsx";
import PageST from "./pages/PageST.jsx";
import Page10 from "./pages/Page10.jsx";


function App() {
 

  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ws2" element={<Page1 />} />
          <Route path="ws3" element={<Page2 />} />
          <Route path="ws4" element={<Page3 />} />
          <Route path="ws6" element={<Page5 />} />
          <Route path="ws7" element={<Page6 />} />
          <Route path="st" element={<PageST />} />
          <Route path="ws10" element={<Page10 />} />
        </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
