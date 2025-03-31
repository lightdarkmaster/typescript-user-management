import Navbar from "./components/Navbar";
import { Properties } from "./types";
import { useState } from "react";
import Swal from "sweetalert2";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";



const Dashboard: React.FC<Properties> = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [showPasswords, setShowPasswords] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchTerm, setSearchTerm] = useState("");

  const togglePasswordVisibility = (username: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  const addUser = () => {
    if (!username || !password || !firstname || !lastname) {
      Swal.fire(
        "Error",
        "Please enter a username, password,firstname and lastname",
        "error"
      );
      return;
    }

    const found = users.find((user) => user.username === username);

    if (found) {
      Swal.fire("Error", "Username already exists", "error");
    } else {
      setUsers([...users, { username, password, firstname, lastname }]);
      setUsername("");
      setPassword("");
      setFirstName("");
      setLastName("");
      Swal.fire("Success", "User added successfully", "success");
    }
  };

  const deleteUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
    Swal.fire("Deleted", "User has been removed", "success");
  };


  const viewDetails = (user: { username: string; firstname: string }) => {
    Swal.fire({
      title: user.username,
      text: `Firstname: ${user.firstname}`,
      icon: "info",
    });
  };

  const updateUser = () => {
    if (!username || !password || !firstname || !lastname) {
      Swal.fire("Error", "Please enter a new username and password", "error");
      return;
    }

    setUsers(
      users.map((user) =>
        user.username === editingUser
          ? { username, password, firstname, lastname }
          : user
      )
    );
    setEditingUser(null);
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            {editingUser ? (
              <button
                onClick={updateUser}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={addUser}
                className="w-fit h-fit bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center justify-center cursor-pointer"
              >
                <IoAddCircleSharp className="w-5 h-5 bg" /> {}
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
              className="w-fit h-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              <FaSearch className="w-5 h-5 bg" />
              {}
            </button>
          </div>
          <table className="w-full border-collapse border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Password</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="justify-evenly">
              {filteredUsers.map((user) => (
                <tr key={user.username} className="border justify-between">
                  <td className="border px-4 py-2">{user.firstname}</td>
                  <td className="border px-4 py-2">{user.lastname}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2 justify-between">
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
                  <td className="px-4 py-2 flex gap-2 justify-evenly">
                    <button
                      onClick={() => {
                        setEditingUser(user.username);
                        setUsername(user.username);
                        setPassword(user.password);
                        setFirstName(user.firstname);
                        setLastName(user.lastname);
                      }}
                      className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 cursor-pointer"
                    >
                      <FiEdit className="w-5 h-5 bg" />
                      {}
                    </button>
                    <button
                      onClick={() => deleteUser(user.username)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                    >
                      <MdDelete className="w-5 h-5 bg" />
                      {}
                    </button>
                    <button
                      onClick={() => viewDetails}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer"
                    >
                      <FaEye  className="w-5 h-5 bg" />
                      {}
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