import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const back = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 p-[10px]">
          <img
            src="/images/gear.gif"
            alt="User Avatar"
            className="w-[200px] h-[200px] animate-fade-in rounded-full shadow-md  cursor-pointer"
          />
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Welcome to My User Management
      </h1>
      <p className="text-lg text-white mt-2 drop-shadow-md">
        Explore and enjoy your stay!
      </p>
      <button
        className="min-w-[200px] h-fit p-[10px] mt-5 bg-red-600 rounded-[10px] poppins-bold text-white cursor-pointer hover:bg-red-700"
        onClick={back}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default HomePage;
