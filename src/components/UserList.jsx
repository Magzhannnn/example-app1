import React from "react";
import users from "../data/users.json";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <div className="user_list flex flex-wrap gap-6">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
