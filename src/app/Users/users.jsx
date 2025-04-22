import React, { useState } from "react";
import Main from "./components/Main";
import TopSide from "./components/TopSide";

const users = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="max-w-[900px] mx-auto py-16 px-4">
      <TopSide
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <Main setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default users;
