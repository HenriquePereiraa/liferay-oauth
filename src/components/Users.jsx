import { useState } from "react";
import { getUsers } from "../utils/request";

export function Users({token}) {
  const [users, setUsers] = useState([]);


  const handleGetUsers = async () => {
    const datas = await getUsers(token.access_token)
      .then((response) => response.json())
      .then((data) => data);

      setUsers(datas.items)
    console.log(datas);
  };


  return (
    <div>
      <h2>Users</h2>

      <button onClick={handleGetUsers} >Get Users</button>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.familyName}</p>
          <p> {user.emailAddress}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
