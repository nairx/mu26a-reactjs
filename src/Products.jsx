import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const url = import.meta.env.VITE_API_URL + "/products";
  const fetchProducts = async () => {
    const res = await axios.get(url + "/get");
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAdd = async () => {
    const res = await axios.post(`${url}/create`, product);
    fetchProducts();
  };
  const handleDelete = async (productId) => {
    const res = await axios.delete(`${url}/delete/${productId}`);
    fetchProducts();
  };
  return (
    <div>
      Products
      <p>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          placeholder="Description"
        />
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Price"
        />
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
          placeholder="Image URL"
        />
        <button onClick={handleAdd}>Add</button>
      </p>
      <ol>
        {products &&
          products.map((product) => (
            <li key={product._id}>
              <Link to={`/admin/editProduct/${product._id}`}> {product.name}</Link>-
              {product.price}-{product.desc}-{product.imgUrl}-
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
