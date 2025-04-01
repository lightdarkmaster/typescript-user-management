import { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

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

    const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
    setProfileImage(randomImage);
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
            src={profileImage}
            alt="User Avatar"
            className="w-[30px] h-[30px] animate-fade-in rounded-full shadow-md border cursor-pointer"
          />
          Hello, <span className="font-semibold cursor-pointer">{username}!</span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
