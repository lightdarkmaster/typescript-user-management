import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";


function Login() {
  return (
    <div className="w-full h-screen items-center justify-center gap-[10px] p-[10px] text-black place-content-center">
      <div className="min-w-[400px] min-fit gap-[10px] p-[10px] bg-white shadow-md rounded-[10px] flex flex-col">
        <div className="w-full h-fit justify-center items-center text-center">
          <h1 className="text-black text-[24px] poppins-bold">Sign In</h1>
        </div>
        <div className="flex flex-col w-full h-full gap-[10px]">
          <form className="w-full h-full p-[20px] rounded-[10px] items-center">

            <div className="w-full h-full gap-[10px] p-[10px] flex text-center justify-center items-center">
            <div className="w-fit h-fit">
              <FaRegUser   className="text-[25px]"/>
            </div>
              <input
              type="text"
              placeholder="Username"
              className="w-full h-fit border p-[10px] rounded-[10px] poppins-light"
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
              />
            </div>

            <div className="w-full h-full gap-[10px] p-[10px]">
              <button className="w-full h-fit bg-[#78AEF5] text-white hover:bg-[#6383ad]">Sign In</button>
            </div>
            <div className="text-center poppins-light gap-[10px] p-[10px]">
              <h1>Already have an account? 
                  <span className="text-blue-800 poppins-light cursor-pointer"> Sign In</span>
              </h1>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login;