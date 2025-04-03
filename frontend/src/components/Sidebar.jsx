import React from "react";
import { useChatStore } from "../../store/useChatStore";

const Sidebar = () => {
  const [getUsers, users, selectedUser, setSelectedUser, isUsersLoading] =
    useChatStore();

  const onlineUsers = [];
  
  return <div></div>;
};

export default Sidebar;
