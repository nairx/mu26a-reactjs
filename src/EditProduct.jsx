import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const url = import.meta.env.VITE_API_URL + "/products";
  const Navigate = useNavigate();
  const fetchProduct = async () => {
    const res = await axios.get(`${url}/getProduct/${productId}`);
    setProduct(res.data.product);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const handleUpdate = async (productId) => {
    const res = await axios.patch(`${url}/update/${productId}`, product);
    Navigate("/admin/products");
  };
  return (
    <div>
      EditProduct
      <p>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          defaultValue={product.name}
        />
      </p>
      <p>
        <input type="text"  onChange={(e) => setProduct({ ...product, description: e.target.value })} defaultValue={product.description} />
      </p>
      <p>
        <input type="number"  onChange={(e) => setProduct({ ...product, price: e.target.value })} defaultValue={product.price} />
      </p>
      <p>
        <input type="text"  onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })} defaultValue={product.imgUrl} />
      </p>
      <p>
        <button onClick={() => handleUpdate(product._id)}>Update</button>
      </p>
    </div>
  );
}
