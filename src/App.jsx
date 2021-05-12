import React  from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart';

export default function App() {
  return (
    <React.Fragment>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" > <h1>Welcome to Carved Rock Fitness</h1> </Route>
            <Route path="/:category"> <Products /> </Route>
            <Route path="/:category/:id" > <Detail /> </Route>
            <Route path="/cart" > <Cart /> </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
