import React from 'react'
import { useState } from 'react'
export default function App() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>
        <input type="text" placeholder='Email' />
      </p>
      <p>
        <input type="password" placeholder='Password' />
      </p>
      <button>Login</button>
    </div>
  )
}

// import React, { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//   return (
//     <div>
//       {score}
//       <button onClick={() => setScore(score + 1)}>Update Score</button>
//     </div>
//   );
// }

// import React from "react";
// export default function App() {
//   const greet = (name) => {
//     alert(name);
//   };
//   return (
//     <div>
//       <button onClick={() => greet("Cathy")}>Click</button>
//     </div>
//   );
// }

// import React from 'react'

// export default function App() {
//   const greet = () => {
//     alert("Hello")
//   }
//   return (
//     <div><button onClick={greet}>Click</button></div>
//   )
// }

// import React from 'react'
// function Pass(){
//   return <div>Pass</div>
// }
// export default function App() {
//   let score = 20
//   return (
//     <div>
//       {score > 40 && <Pass/> }
//     </div>
//   )
// }

// import React from 'react'

// function Pass(){
//   return <div>Pass</div>
// }

// function Fail(){
//   return <div>Fail</div>
// }

// export default function App() {
//   let score = 10
//   return (
//     <div>
//       {score > 40 ? <Pass/> : <Fail/>}
//     </div>
//   )
// }

// import React from "react";

// export default function App() {
//   const products = [
//     { id: 1, name: "Laptop", price: 10000 },
//     { id: 2, name: "Mouse", price: 700 },
//     { id: 3, name: "Keyboard", price: 1200 },
//   ];
//   return (
//     <div>
//       <ol>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name}-{product.price}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// import React from "react";
// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard"];
//   return (
//     <div>
//       {products.map((product) => (
//         <li>{product}</li>
//       ))}
//     </div>
//   );
// }

// import React from 'react'
// function Sum({a,b=0}){
// return a + b
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={4} b={7}/>
//     </div>
//   )
// }

// import React from 'react'
// function Sum({a,b}){
// return a + b
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={4} b={5}/>
//     </div>
//   )
// }

// import React from 'react'
// function Sum(props){
// return props.a + props.b
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={4} b={5}/>
//     </div>
//   )
// }

// import React from 'react'
// export default function App() {
//   let name = "John"
//   let a = 10
//   let b = 20
//   return (
//     <div>Hello {name},{a+b}</div>
//   )
// }

// import React from 'react'
// import "./App.css"
// export default function App() {
//   return (
//     <div>
//       <h1 className="header">Hello World</h1>
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <h1 style={{backgroundColor:"orange"}}>Hello World</h1>
//     </div>
//   )
// }

// import Header from "./Header";
// import Footer from "./Footer";
// import Home from "./Home";
// function App() {
//   return (
//     <div>
//      <Header/>
//      <Home/>
//      <Footer/>
//     </div>
//   );
// }
// export default App;
