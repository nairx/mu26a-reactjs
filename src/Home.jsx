import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import "./Home.css";
import axios from "axios";
export default function Home() {
  const { user, cart, setCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const url = import.meta.env.VITE_API_URL + "/products";
  const fetchProducts = async () => {
    const res = await axios.get(url + "/get");
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="flex justify-center flex-wrap">
      {products &&
        products.map((product) => (
          <div className="m-1  border border-gray-500" key={product._id}>
            <img src={product.imgUrl} width={300} />
            <h3 className="box">{product.name}</h3>
            <p>{product.description}</p>
            <h4 className="font-bold">₹{product.price}</h4>
            <p>
              <button className="bg-gray-500 hover:bg-gray-300 text-white w-full font-bold p-2" onClick={() => addToCart(product)}>Add to Cart</button>
            </p>
          </div>
        ))}
    </div>
  );
}
