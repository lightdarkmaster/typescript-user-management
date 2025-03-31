import { Link} from "react-router-dom";


function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">

        <img
          src="/images/choose.gif"
          alt="Landing Page Illustration"
          className="w-fit h-fit mb-6 animate-fade-in rounded-full shadow-md"
        />

      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome User</h1>
        <p className="text-lg mb-8 opacity-90 animate-fade-in delay-150">
        Empowering seamless user management with simplicity and security.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition-all shadow-md">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg transition-all shadow-md">
           <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
