
function Navbar() {
  return (
    <div className="w-full min-h-[40px] flex  bg-[#2469c3] text-[16px] poppins-bold text-white items-center p-[10px] gap-[5%] shadow-md fixed">
    <ul className="flex gap-[20px] p-[10px] poppins-bold text-[16px]">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">Users</li>
    </ul>
  </div>
  );
}

export default Navbar;