import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Login({user}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


    const emptyModal=()=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please provide username and password!",
      });
    }
    
  const loginSuccessModal = () => {
      Swal.fire({
          title: "Logged In Successfully!",
          icon: "success",
          draggable: true,
          theme: "dark"
      });
  }

  const loginNotSuccessful = () => {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="/">Sign Up</a>',
          theme: "dark"
      });
  }
  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };


  const loginSubmit = (e) => {
      e.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      const found = user.some((user) => user.username === username && user.password === password);
      console.log(found);

      if (found) {
          loginSuccessModal();
          navigate('/app');
      } else {
          loginNotSuccessful();
      }

      if(username ==='' && password ===''){
        emptyModal();
      }
  };


  return (
    <div className="w-full h-screen items-center justify-center gap-[10px] p-[10px] text-black place-content-center flex">
      <div className="w-fit min-fit gap-[10px] p-[10px] bg-white shadow-md rounded-[10px] flex flex-col">
        <div className="w-full h-fit justify-center items-center text-center">
          <h1 className="text-black text-[24px] poppins-bold">Sign In</h1>
        </div>
        <div className="flex flex-col w-full h-full gap-[10px]">
          <form className="w-full h-full p-[20px] rounded-[10px] items-center" onSubmit={loginSubmit}>

            <div className="w-full h-full gap-[10px] p-[10px] flex text-center justify-center items-center">
            <div className="w-fit h-fit">
              <FaRegUser   className="text-[25px]"/>
            </div>
              <input
              type="text"
              placeholder="Username"
              className="w-full h-fit border p-[10px] rounded-[10px] poppins-light"
              onChange={handleUsernameChange}
              />
            </div>


            <div className="w-full h-full gap-[10px] p-[10px] flex text-center justify-center items-center">
            <div className="w-fit h-fit">
              <LuLockKeyhole className="text-[25px]"/>
            </div>
              <input
              type="password"
              placeholder="Password"
              className="w-full h-full border p-[10px] rounded-[10px] poppins-light"
              onChange={handlePasswordChange}
              />
            </div>

            <div className="w-full h-full gap-[10px] p-[10px]">
              <button className="w-full h-fit bg-[#78AEF5] p-[10px] rounded-[10px] text-white hover:bg-[#6383ad]">Sign In</button>
            </div>
            <div className="text-center poppins-light gap-[10px] p-[10px]">
              <h1>Don't have an account? 
                  <Link to={"/signup"} className="text-blue-800 poppins-light cursor-pointer"> Sign Up</Link>
              </h1>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login;