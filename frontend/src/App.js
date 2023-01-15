import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import InProgress from "./components/pages/Inprogress";
import OrderResponse from "./components/pages/OrderResponse";
import NotFound from "./components/pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<InProgress />} />
          <Route path="/help" element={<InProgress />} />
          <Route path="/profile" element={<InProgress />} />
          <Route path="/confirm" element={<OrderResponse />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
