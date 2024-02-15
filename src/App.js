import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "../src/pages/About";
import Dashboard from "../src/pages/Dashboard";
import Product from "../src/pages/Product";
import ProductList from "../src/pages/ProductList";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Sidebar>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/About" Component={About} />
          <Route path="/Product" Component={Product} />
          <Route path="/ProductList" Component={ProductList} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
