function Navbar() {
  return (
    <nav className="w-full bg-[#2469c3] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo / Brand Name */}
        <h1 className="text-lg font-bold tracking-wide cursor-pointer">UserManager</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-[16px] poppins-bold">
          <li className="cursor-pointer hover:text-gray-200 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-200 transition">Users</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
