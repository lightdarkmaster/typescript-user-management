import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState, SetStateAction } from "react";
import Swal from "sweetalert2";
import { Properties } from "./types";

const Login: React.FC<Properties> = ({ users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const emptyModal = () => {
    Swal.fire({
      title: "Oops...",
      text: "Please provide username and password!",
      imageUrl: "/images/please.gif",
      imageWidth: 200,
      imageHeight: 200,
    });
  };

  const loginSuccessModal = (user: { username: string }) => {
    Swal.fire({
      imageUrl: "/images/welcome.gif",
      imageWidth: 200,
      imageHeight: 200,
      title: `Welcome, ${user.username}!`,
      draggable: true,
    });
  };

  const loginNotSuccessful = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid username or password!",
      footer: '<a href="/signup">Sign Up</a>',
      theme: "dark",
    });
  };

  const handleUsernameChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const loginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      emptyModal();
      return;
    }

    const found = users.find((user) => user.username === username && user.password === password);

    if (found) {
      loginSuccessModal({ username });
      localStorage.setItem("loggedInUser", JSON.stringify(found));
      navigate("/dashboard");
      setUsername("");
      setPassword("");
    } else {
      loginNotSuccessful();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 text-black poppins-light bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-fit min-w-[300px] p-6 bg-white shadow-md rounded-lg flex flex-col">
        <div className="text-center">
          <h1 className="text-black text-xl font-bold">Sign In</h1>
        </div>
        <form className="flex flex-col gap-4 mt-4" onSubmit={loginSubmit}>
          <div className="flex items-center gap-2 border p-3 rounded-lg">
            <FaRegUser className="text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none bg-transparent"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="flex items-center gap-2 border p-3 rounded-lg relative">
            <LuLockKeyhole className="text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="absolute right-3 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoEyeOutline className="text-xl" /> : <IoEyeOffOutline className="text-xl" />}
            </button>
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
            Sign In
          </button>
          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
