import React, { useState, useEffect } from "react";
import { ageOptions } from ".";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/reducers/userReducer";

const EditUserModal = ({ isOpen = false, setIsOpen, user }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || "",
        age: user.age || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        ...user,
        name: userData.name,
        age: userData.age,
        email: userData.email,
      })
    );
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg p-6 w-96">
        <h3 className="text-xl font-bold text-center text-white mb-4">
          Edit User
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <select
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
            name="age"
            value={userData.age}
            onChange={handleChange}
          >
            <option value="0">-</option>
            {ageOptions}
          </select>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2 bg-gray-600 text-white font-medium rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-600 text-white font-medium rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default EditUserModal;
