import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditUser() {
  const [user, setUser] = useState({});
  const url = import.meta.env.VITE_API_URL + "/users";
  const {userId}  = useParams();
  const Navigate = useNavigate()
  const handleSubmit = async () => {
    const res = await axios.patch(`${url}/updateUser/${userId}`,user)
    Navigate("/admin")
  };
  const fetchUser = async () => {
    const res = await axios.get(`${url}/getUser/${userId}`);
    setUser(res.data.user);
  };



  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      EditUser
      <p>
        <input
          type="text"
          defaultValue={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
      <p>
        <input
          type="text"
          defaultValue={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </p>
      {/* <p>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p> */}
      <p>
        <input
          type="text"
          defaultValue={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          placeholder="Role"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
