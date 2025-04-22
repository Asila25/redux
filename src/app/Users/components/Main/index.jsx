import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../../../assets/DeleteIcon";
import EdidIcon from "../../../../assets/EditIcon";
import { removeUser } from "../../../../redux/reducers/userReducer";

const Main = () => {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      {usersList.length === 0 ? (
        <div className="text-center text-gray-400 py-8">No users found</div>
      ) : (
        usersList.map((user) => (
          <div
            key={user.id}
            className="border border-gray-600 rounded-lg bg-gray-800 flex justify-between "
          >
            <div className="p-4">
              <p className="text-white font-medium mb-1">
                {user.name} |{" "}
                <span className="text-gray-300 italic">{user.age}</span>
              </p>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="border-l border-gray-600 flex flex-col">
              <div
                onClick={() => dispatch(removeUser(user.id))}
                className="h-full flex items-center justify-center p-3 border-b hover:bg-blue-900 cursor-pointer"
              >
                <DeleteIcon color="white" />
              </div>
              <div className="h-full flex items-center justify-center p-3 hover:bg-blue-900 cursor-pointer">
                <EdidIcon color="white" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Main;
