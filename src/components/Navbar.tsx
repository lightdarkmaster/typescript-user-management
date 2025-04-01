import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    logoutModal();
    navigate("/login");
  };

  const homeNav = () => {
    navigate("/home");
  };
  const logoutModal = () => {
    Swal.fire({
      title: "See you Again!",
      text: "Logout Successfully",
      imageUrl: "/images/waving.gif",
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (!storedUser) return;

    try {
      const parsedUser = JSON.parse(storedUser);
      if (typeof parsedUser === "object" && parsedUser.username) {
        setUsername(parsedUser.username);
      } else {
        setUsername(parsedUser);
      }
    } catch {
      setUsername(storedUser);
    }

    const profileImages = [
      "/images/profiles/samplepic2.png",
      "/images/profiles/samplepic3.jpg",
      "/images/profiles/samplepic4.jpg",
      "/images/profiles/bae.gif",
      "/images/profiles/kyj.gif",
    ];

    const randomImage =
      profileImages[Math.floor(Math.random() * profileImages.length)];
    setProfileImage(randomImage);
  }, []);

  return (
    <div className="w-full min-h-[40px] flex bg-[#2469c3] text-[16px] poppins-bold text-white items-center content-center p-[10px] gap-[5%] shadow-md fixed">
      <ul className="flex gap-[20px] p-[10px] poppins-bold text-[16px]">
        <li className="cursor-pointer" onClick={homeNav}>
          Home
        </li>
      </ul>
      {username && (
        <div className="ml-auto pr-5 flex gap-[10px] items-center">
          <img
            src={profileImage}
            alt="User Avatar"
            className="w-[30px] h-[30px] animate-fade-in rounded-full shadow-md border cursor-pointer"
          />
          Hello,{" "}
          <span className="font-semibold cursor-pointer">{username}!</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-5 h-[30px] rounded hover:bg-yellow-600 cursor-pointer shadow-md"
          >
            <BiLogOut className="w-fit h-fit" />
            {}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
