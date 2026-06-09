import React from 'react'
import { AppContext } from './App'
import { useContext } from 'react'
export default function Cart() {
  const {cart,setCart,user} = useContext(AppContext)
  return (
    <div>My Cart
{cart && cart.map(item=>(
  <div key={item._id}>{item.name}-{item.price}-{item.quantity}</div>
))}


    </div>
  )
}
