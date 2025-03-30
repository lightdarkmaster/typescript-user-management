import Navbar from "./components/Navbar";
import { Properties } from "./Types";
import { useState } from "react";
import Swal from "sweetalert2";

const Dashboard: React.FC<Properties> = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState("");

  const togglePasswordVisibility = (username: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  const addUser = () => {
    if (!username || !password) {
      Swal.fire("Error", "Please enter a username and password", "error");
      return;
    }
    
    const found = users.find((user) => user.username === username);
    
    if (found) {
      Swal.fire("Error", "Username already exists", "error");
    } else {
      setUsers([...users, { username, password }]);
      setUsername("");
      setPassword("");
      Swal.fire("Success", "User added successfully", "success");
    }
  };

  const deleteUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
    Swal.fire("Deleted", "User has been removed", "success");
  };

  const updateUser = () => {
    if (!username || !password) {
      Swal.fire("Error", "Please enter a new username and password", "error");
      return;
    }
    
    setUsers(users.map((user) =>
      user.username === editingUser ? { username, password } : user
    ));
    setEditingUser(null);
    setUsername("");
    setPassword("");
    Swal.fire("Updated", "User information updated", "success");
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-screen flex flex-col gap-4 poppins-light">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Manage Users</h2>
          <div className="flex gap-[20px] p-[10px]">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded w-1/3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-1/3"
            />
            {editingUser ? (
              <button
                onClick={updateUser}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={addUser}
                className="w-fit h-fit bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add User
              </button>
            )}
          </div>
          <div className="flex gap-[20px] p-[10px]">
            <input
              type="text"
              placeholder="Search Users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
              <button
                onClick={() => setSearchTerm(searchTerm)}
                className="w-fit h-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
          </div>
          <table className="w-full border-collapse border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Password</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="justify-evenly">
              {filteredUsers.map((user) => (
                <tr key={user.username} className="border justify-between">
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">
                    {showPasswords[user.username] ? user.password : "********"}
                    <span className="w-fit h-fit">
                      <button
                        onClick={() => togglePasswordVisibility(user.username)}
                        className="ml-2 text-blue-500 hover:underline"
                      >
                        {showPasswords[user.username] ? "Hide" : "Show"}
                      </button>
                    </span>
                  </td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button
                      onClick={() => {
                        setEditingUser(user.username);
                        setUsername(user.username);
                        setPassword(user.password);
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.username)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;