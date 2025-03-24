
import { BrowserRouter, Routes, Route } from "react-router";
import Background from "./components/Background";
import Pie from "./components/Pie";
import { Toaster } from "react-hot-toast"
import Home from "./views/Home";
import AboutService from "./views/AboutService";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Background />
      <Routes >
        {/* Rutas que se gestionan con react-router */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<AboutService />} />
      </Routes>
      <Pie />
    </BrowserRouter>
  );
}

export default App;
