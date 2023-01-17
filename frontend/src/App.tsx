import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ProductsPage from "./pages/ProductsPage";
import Login from "./pages/login";
import Nav from "./pages/Nav";
function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
        <Routes>
          <Route path={"products"} element={<ProductsPage />} />
          <Route path={"login"} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
