import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"products"} element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
