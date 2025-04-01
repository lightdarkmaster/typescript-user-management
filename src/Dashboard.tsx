import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Swal from "sweetalert2";
import { Properties } from "./types";
import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

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
  const [date, setDate] = useState("");
  const [isUsernameAsc, setIsUsernameAsc] = useState(true);
  const [isFirstnameAsc, setIsFirstnameAsc] = useState(true);
  const [isLastnameAsc, setIsLastnameAsc] = useState(true);
  const [isDateAsc, setIsDateAsc] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

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
      setUsers([...users, { username, password, firstname, lastname, date }]);
      setUsername("");
      setPassword("");
      setFirstName("");
      setLastName("");
      Swal.fire({
        title: "Success!",
        text: "User added successfully!",
        imageUrl: "/images/good-job.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  };

  const deleteUser = (username: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((user) => user.username !== username));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const viewDetails = (user: {
    username: string;
    firstname: string;
    lastname: string;
    date: string;
    password: string;
  }) => {
    Swal.fire({
      imageUrl: "/images/user.gif",
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
      title: `<strong>User Details</strong>`,
      html: `
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Firstname:</b> ${user.firstname}</p>
        <p><b>Lastname:</b> ${user.lastname}</p>
        <p><b>Date:</b> ${user.date}</p>
        <p><b>Password:</b> ${user.password}</p>
      `,
      confirmButtonText: "Close",
    });
  };

  const updateUser = () => {
    if (!username || !password || !firstname || !lastname || !date) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }

    setUsers(
      users.map((user) =>
        user.username === editingUser
          ? { username, password, firstname, lastname, date }
          : user
      )
    );
    setEditingUser(null);
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setDate("");

    Swal.fire("Updated", "User information updated successfully", "success");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.date.includes(searchTerm)
  );

  const usernameSort = () => {
    const sortedUsers = [...users].sort((a, b) =>
      isUsernameAsc
        ? a.username.localeCompare(b.username)
        : b.username.localeCompare(a.username)
    );
    setUsers(sortedUsers);
    setIsUsernameAsc(!isUsernameAsc);
  };

  const firstnameSort = () => {
    const sortedUsers = [...users].sort((a, b) =>
      isFirstnameAsc
        ? a.firstname.localeCompare(b.firstname)
        : b.firstname.localeCompare(a.firstname)
    );
    setUsers(sortedUsers);
    setIsFirstnameAsc(!isFirstnameAsc);
  };

  const lastnameSort = () => {
    const sortedUsers = [...users].sort((a, b) =>
      isLastnameAsc
        ? a.lastname.localeCompare(b.lastname)
        : b.lastname.localeCompare(a.lastname)
    );
    setUsers(sortedUsers);
    setIsLastnameAsc(!isLastnameAsc);
  };

  const dateSort = () => {
    const sortedUsers = [...users].sort((a, b) =>
      isDateAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setUsers(sortedUsers);
    setIsDateAsc(!isDateAsc);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 poppins-light bg-gradient-to-br from-blue-200 to-purple-100">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full h-fit flex justify-between items-center px-[10px]">
            <h2 className="text-xl font-bold mb-4">Manage Users</h2>
          </div>
          <div className="rounded-[10px] shadow-xs mb-2">
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
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 rounded w-full mb-4"
              />
              <div className="w-full h-full relative">
                {showPass ? (
                  <IoMdEye
                    className="absolute text-[25px] top-[11px] transform right-[10px] cursor-pointer"
                    onClick={() => {
                      showPassword();
                    }}
                  />
                ) : (
                  <IoIosEyeOff
                    className="absolute text-[25px] top-[11px] transform right-[10px] cursor-pointer"
                    onClick={() => {
                      showPassword();
                    }}
                  />
                )}
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" min-w-[150px] border p-2 rounded w-full mb-4 pr-[40px]"
                />
              </div>
              {editingUser ? (
                <button
                  onClick={updateUser}
                  className="bg-yellow-500 text-white px-4 h-[45px] rounded hover:bg-yellow-600 cursor-pointer shadow-md"
                >
                  <IoSaveSharp className="w-fit h-fit" />
                  {}
                </button>
              ) : (
                <button
                  onClick={addUser}
                  className="w-fit h-fit bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center justify-center cursor-pointer shadow-md"
                >
                  <IoAddCircleSharp className="w-5 h-5" /> {}
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
                className="w-fit h-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer shadow-md"
              >
                <FaSearch className="w-5 h-5 bg" />
                {}
              </button>
            </div>
          </div>
          <div className="w-full h-fit justify-center text-center items-center">
            <h2 className="text-xl font-bold mb-4">Users Table</h2>
          </div>
          <table className="w-full h-fit border-collapse border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    First Name{" "}
                    <FaSort
                      className="cursor-pointer"
                      onClick={firstnameSort}
                    />
                  </div>
                </th>
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    Last Name{" "}
                    <FaSort className="cursor-pointer" onClick={lastnameSort} />
                  </div>
                </th>
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    Username{" "}
                    <FaSort className="cursor-pointer" onClick={usernameSort} />
                  </div>
                </th>
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    Date{" "}
                    <FaSort className="cursor-pointer" onClick={dateSort} />
                  </div>
                </th>
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    Password
                  </div>
                </th>
                <th className="border px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="justify-evenly">
              {filteredUsers.map((user) => (
                <tr key={user.username} className="border justify-between">
                  <td className="border px-4 py-2">{user.firstname}</td>
                  <td className="border px-4 py-2">{user.lastname}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.date}</td>
                  <td className="border px-4 py-2 text-center align-middle">
                    <div className="flex items-center justify-center gap-2">
                      {showPasswords[user.username]
                        ? user.password
                        : "********"}
                      <button
                        onClick={() => togglePasswordVisibility(user.username)}
                        className="text-blue-500 hover:underline cursor-pointer flex items-center justify-center"
                      >
                        {showPasswords[user.username] ? (
                          <IoIosEyeOff className="w-[20px] h-[20px]" />
                        ) : (
                          <IoMdEye className="w-[20px] h-[20px]" />
                        )}
                      </button>
                    </div>
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
                      className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 cursor-pointer shadow-md"
                    >
                      <FiEdit className="w-5 h-5 bg" />
                      {}
                    </button>
                    <button
                      onClick={() => deleteUser(user.username)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer shadow-md"
                    >
                      <MdDelete className="w-5 h-5 bg" />
                      {}
                    </button>
                    <button
                      onClick={() => viewDetails(user)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer shadow-md"
                    >
                      <FaEye className="w-5 h-5 bg" />
                      {}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
