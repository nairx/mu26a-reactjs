import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import "./Home.css"
import axios from "axios";
export default function Home() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const url = (import.meta.env.VITE_API_URL + "/products");
  const fetchProducts = async () => {
    const res = await axios.get(url + "/get");
    setProducts(res.data.products)
  };
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className="row">
        {products && products.map(product=>(
        <div key={product._id}>
          <img src={product.imgUrl} width={300}/>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      ))}
    </div>
  );
}
