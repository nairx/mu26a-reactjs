import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  const addNote = async () => {
    await axios.post("http://localhost:5000/notes", { text });
    setText("");
    fetchNotes();
  };
  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Notes App</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note"
      />
      <button onClick={addNote}>Add</button>
      <ol>
        {notes && notes.map((note) => (
          <li key={note._id}>
            {note.text}{" "}
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;

// import React from "react";
// function Register() {
//   return (
//     <div>
//       <h3>Registration Form</h3>
//       <p>
//         <input type="text" placeholder="Name" />
//       </p>
//       <p>
//         <input type="text" placeholder="Email" />
//       </p>
//       <p>
//         <input type="password" placeholder="Password" />
//       </p>
//       <button>Submit</button>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h3>Login Form</h3>
//       <p>
//         <input type="text" placeholder="Email" />
//       </p>
//       <p>
//         <input type="password" placeholder="Password" />
//       </p>
//       <button>Submit</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Register />
//       <hr />
//       <Login />
//     </div>
//   );
// }

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios"
// export default function App() {
//   const [products, setProducts] = useState([]);
//   const API_URL = "http://localhost:5000/products";
//   const fetchProducts = async () => {
//     const res = await axios.get(API_URL);
//     setProducts(res.data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <div>
//       {products &&
//         products.map((product) => <li key={product.id}>{product.name}</li>)}
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [user, setUser] = useState({});
//   const [message, setMessage] = useState();
//   const users = [
//     { id: 1, email: "john@gmail.com", password: "1234" },
//     { id: 2, email: "amy@gmail.com", password: "4567" },
//   ];
//   const handleLogin = () => {
//     const found = users.find(
//       (element) =>
//         element.email === user.email && element.password === user.password,
//     );
//     if (found) {
//       setMessage("Welcome");
//     } else {
//       setMessage("Access Denied");
//     }
//   };
//   return (
//     <div>
//       <h2>Login Form</h2>
//       {message}
//       <p>
//         <input
//           type="text"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder="Email"
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           placeholder="Password"
//         />
//       </p>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

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
