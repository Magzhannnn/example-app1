import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="user_item flex flex-col gap-5 text-main-blackText mx-auto w-[90%] note:w-[60%] table:w-[32%]  relative">
      <div className="text-[28px] font-bold">{user.name}</div>
      <div className="text-lg">
        <div>{user.phoneNumber}</div>
        <div>{user.email}</div>
        <div className="mt-3 text-main-graaay">{user.address}</div>
      </div>
      <img
        className="absolute top-6 right-6"
        src={require(`../assets/Flag${user.id + 1}.png`)}
        alt={`flag${user.id + 1}`}
      />
    </div>
  );
};

export default UserItem;
