import Navbar from "./components/Navbar";

function Dashboard() {
  return (
    <div className="w-full h-screen flex-col gap-[10px]">
      <Navbar/>


      <div className="w-full h-full justify-center items-center border content-around flex">
        <div className="relative min-w-[60%] h-fit rounded-[10px] justify-center items-center ">
          <table className="w-full text-sm text-left rtl:text-right text-white">
            <thead className="text-xs text-white uppercase bg-[#2469c3] rounded-[10px]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Chanbarbosa
                </th>
                <td className="px-6 py-4">**************</td>
                <td className="px-6 py-4">Active</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  chanbarbosa
                </th>
                <td className="px-6 py-4">**************</td>
                <td className="px-6 py-4">Inactive</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  johndoe
                </th>
                <td className="px-6 py-4">**************</td>
                <td className="px-6 py-4">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
  );
}

export default Dashboard;
