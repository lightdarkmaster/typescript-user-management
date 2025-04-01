import { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUsername(parsedUser.username || parsedUser); // Handle both object and string cases
      } catch {
        setUsername(storedUser); // If it's already a string, use it directly
      }
    }
  }, []);

  return (
    <div className="w-full min-h-[40px] flex bg-[#2469c3] text-[16px] poppins-bold text-white items-center content-center p-[10px] gap-[5%] shadow-md fixed">
      <ul className="flex gap-[20px] p-[10px] poppins-bold text-[16px]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Users</li>
      </ul>
      {username && (
        <div className="ml-auto pr-5 flex gap-[10px] items-center">
        <img
          src="/images/wavingchild.gif"
          alt="Landing Page Illustration"
          className="w-[30px] h-[30px] animate-fade-in rounded-full shadow-md items-center border cursor-pointer"
        />
          Hello, <span className="font-semibold cursor-pointer">{username}</span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
