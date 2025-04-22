import React from "react";
import { ageOptions } from ".";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../redux/reducers/userReducer";

const FormModal = (props) => {
  const dispatch = useDispatch();
  const { isOpen = false, setIsOpen } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { age, name, email } = e.target;
    dispatch(
      addUser({
        id: Date.now(),
        name: name.value,
        age: age.value,
        email: email.value,
      })
    );

    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg  p-6 w-96">
        <h3 className="text-xl font-bold text-center text-white mb-4">
          New User
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white "
          />
          <select
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white "
            name="age"
          >
            <option value="0">-</option>
            {ageOptions}
          </select>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white "
          />
          <button className="mt-2 py-2 bg-blue-600  text-white font-medium rounded ">
            Save
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default FormModal;
