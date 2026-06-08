import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Users() {
  const [users, setUsers] = useState([]);
  const url = import.meta.env.VITE_API_URL + "/users";
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${url}/get`);
      setUsers(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (userId) => {
    const res = await axios.delete(`${url}/delete/${userId}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      <ol>
        {users &&
          users.map((user) => (
            <li key={user._id}>
              {user.name}-{user.email}-{user.role}-
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
