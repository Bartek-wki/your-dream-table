import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import NotFound from "./components/pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
