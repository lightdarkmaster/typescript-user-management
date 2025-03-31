import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Properties } from "./types";
import { MdDriveFileRenameOutline } from "react-icons/md";



const Signup: React.FC<Properties> = ({ users, setUsers }) => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");

  const emptyModal = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please provide username and password!",
    });
  };

  const registerModal = () => {
    Swal.fire({
      title: "Registered Successfully!",
      icon: "success",
      draggable: true,
      theme: "dark",
    });
  };

  const modalForDuplicate = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };
  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "" || firstname.trim() ==="" || lastname.trim() ==="") {
      emptyModal();
      return;
    }

    const newUser = { username, password, firstname, lastname };

    setUsers([...users, newUser]);

    console.log(users);

    registerModal();
    const found = users.find((users) => users.username === username);
    if (found) {
      modalForDuplicate();
    } else {
      registerModal();
    }
    setUsers([...users, { username, password, firstname, lastname}]);
    setUserName("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 text-black poppins-light">
      <div className="min-w-[400px] p-6 bg-white shadow-md rounded-lg flex flex-col">
        <div className="text-center">
          <h1 className="text-black text-xl font-bold">Sign Up</h1>
        </div>
        <form className="flex flex-col gap-4 mt-4" onSubmit={registerUser}>
        <div className="flex items-center gap-2 border p-3 rounded-lg">
            <MdDriveFileRenameOutline  className="text-xl" />
            <input
              type="text"
              placeholder="Firstname"
              className="w-full outline-none bg-transparent"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <MdDriveFileRenameOutline  className="text-xl" />
            <input
              type="text"
              placeholder="Lastname"
              className="w-full outline-none bg-transparent"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <FaRegUser className="text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none bg-transparent"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <LuLockKeyhole className="text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
          <div className="text-center text-sm">
            <p>
              Already have an account?
              <Link
                to="/login"
                className="text-blue-700 font-semibold hover:underline"
              >
                <span> Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
