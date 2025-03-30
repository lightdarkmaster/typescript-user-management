import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  // State variables with correct typing
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<{ username: string; password: string }[]>([]);

  
  const emptyModal=()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please provide username and password!",
    });
  }

  const registerModal = () => {
    Swal.fire({
      title: "Registered Successfully!",
      icon: "success",
      draggable: true,
      theme: "dark",
    });
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (username.trim() === "" || password.trim() === "") {
      emptyModal();
      return;
    }

    const newUser = { username, password };
    
    // Add new user to the list correctly
    setUsers([...users, newUser]);

    console.log(users);

    registerModal();

    // Clear input fields after submission
    setUserName("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-[10px] p-[10px] text-black">
      <div className="w-fit min-fit gap-[10px] p-[10px] bg-white shadow-md rounded-[10px] flex flex-col">
        <div className="w-full h-fit text-center">
          <h1 className="text-black text-[24px] poppins-bold">Sign Up</h1>
        </div>
        <div className="flex flex-col w-full gap-[10px]">
          <form onSubmit={registerUser} className="w-full h-full p-[20px] rounded-[10px]">
            <div className="flex gap-[10px] p-[10px] items-center">
              <FaRegUser className="text-[25px]" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border p-[10px] rounded-[10px] poppins-light"
              />
            </div>

            <div className="flex gap-[10px] p-[10px] items-center">
              <LuLockKeyhole className="text-[25px]" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-[10px] rounded-[10px] poppins-light"
              />
            </div>

            <div className="w-full p-[10px]">
              <button type="submit" className="w-full bg-[#78AEF5] p-[10px] rounded-[10px] text-white hover:bg-[#6383ad]">
                Sign Up
              </button>
            </div>
            <div className="text-center poppins-light p-[10px]">
              <h1>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-800 poppins-light cursor-pointer">
                  Sign In
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
