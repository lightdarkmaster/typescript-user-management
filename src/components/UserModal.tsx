import {UserModalProps } from "../types";


const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
    if (!user) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Firstname:</b> {user.firstname}</p>
          <p><b>Lastname:</b> {user.lastname}</p>
          <p><b>Date:</b> {user.date}</p>
          <p><b>Password:</b> {user.password}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default UserModal;