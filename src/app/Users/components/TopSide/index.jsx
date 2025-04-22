import React, { useEffect, useState } from "react";
import { agesOpt } from "./data";
import FormModal from "./FormModal";

export const ageOptions = agesOpt.map((age) => (
  <option key={age.value} value={age.value}>
    {age.label}
  </option>
));

const TopSide = (props) => {
  const { selectedUser, setSelectedUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) setSelectedUser(null);
  }, [isModalOpen]);

  return (
    <div className="mb-6">
      <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <h1 className="text-3xl font-bold text-center text-white mb-4">Users</h1>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <input
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
            name="search"
          />
          <select
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="age"
          >
            <option value="0">-</option>
            {ageOptions}
          </select>
          <select
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="sort"
            id=""
          >
            <option value="all">All</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSide;
