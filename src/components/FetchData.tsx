
import { useEffect, useState } from "react";
import userService, { type User } from "./services/user-service";


const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);

  const deleteUser = (user: User) => {
    const original = [...users];
    setUsers(users.filter((currentUser) => currentUser.id != user.id));
    userService.delete(user.id).catch((err) => {
      setUsers(original);
      console.log(err);
    });
  };
  const addUser = () => {
    const original = [...users];
    const newUser = { id: 0, name: "hila sharabi" };
    setUsers([newUser, ...users]);
    userService
      .add(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        console.log(err);
        setUsers(original);
      });
  };

  const updateUser = (user: User) => {
    const original = [...users];
    const updateUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (user.id === u.id ? updateUser : u)));
    userService.update(updateUser).catch((err) => {
      console.log(err);
      setUsers(original);
    });
  };

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));

    return () => cancel();
  }, []);

  return (
    <>
      <button onClick={addUser} className="btn btn-primary mb-3">
        Add
      </button>
      <div className="mb-3">
        <ul className="list-group">
          {users.map((user) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={user.id}
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUser(user)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchData;
