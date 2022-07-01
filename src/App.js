import './App.css';
import Header from './Component/Share/Header/Header';
import Shops from './Component/Shops/Shops';
import { Routes, Route } from "react-router-dom";
import About from './Component/About/About';
import Order from './Component/Order/Order';
import Inventory from './Component/Inventory/Inventory';
//import Order_info from './Component/Order_info/Order_info';
function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Shops />} />
        <Route path="/order" element={<Order />} /> 
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
