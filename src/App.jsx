import React, { useState, useEffect }  from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getProducts } from './services/productService'
import Spinner from './Spinner'

export default function App() {

  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductList = async() => {
    await getProducts('shoes')
          .then((response) => setProducts(response))
          .catch((e) => setError(e))
          .finally(() => setLoading(false));
  }

  useEffect(() => {
    getProductList();
  }, [])
  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;

  if (error) throw error;
  if (loading) return <Spinner />  

  return (
    <React.Fragment>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select 
              id="size"
              value={size}
              onChange= {(e) => { setSize(e.target.value)}}
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {size && <h2>Found {filteredProducts.length} items</h2>}
          </section>
          <section id="products">
            {filteredProducts.map(renderProduct)}
          </section>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
