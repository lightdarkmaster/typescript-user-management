import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Properties } from "./types";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Signup: React.FC<Properties> = ({ users, setUsers }) => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const emptyModal = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please provide all the information needed",
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
      text: "Username already exists!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });
    const timestamp = `${formattedDate} ${formattedTime}`;

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      timestamp.trim() === ""
    ) {
      emptyModal();
      return;
    }

    const found = users.find((user) => user.username === username);
    if (found) {
      modalForDuplicate();
      return;
    }

    const newUser = {
      username,
      password,
      firstname,
      lastname,
      date: timestamp,
    };

    setUsers([...users, newUser]);

    registerModal();

    setUserName("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setDate("");

    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 text-black poppins-light bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="min-w-[400px] p-6 bg-white shadow-md rounded-lg flex flex-col">
        <div className="text-center">
          <h1 className="text-black text-xl font-bold">Sign Up</h1>
        </div>
        <form className="flex flex-col gap-4 mt-4" onSubmit={registerUser}>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <MdDriveFileRenameOutline className="text-xl" />
            <input
              type="text"
              placeholder="Firstname"
              className="w-full outline-none bg-transparent"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <MdDriveFileRenameOutline className="text-xl" />
            <input
              type="text"
              placeholder="Lastname"
              className="w-full outline-none bg-transparent"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
              required
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
              autoComplete="off"
              required
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg relative">
            <LuLockKeyhole className="text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <button
              type="button"
              className="absolute right-3 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEyeOutline className="text-xl" />
              ) : (
                <IoEyeOffOutline className="text-xl" />
              )}
            </button>
          </div>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded w-full mb-4 hidden"
          />
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
