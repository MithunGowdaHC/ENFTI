import React, { useState } from "react";
import Sidebar from "./Sidebar";

import Chats from "./Chats";
import ChatWindow from "./ChatWindow";
import EmptyChat from "./EmptyChat";
import Header from "./Header";
const MessageContainer = () => {
   
  const [selectContact, setselectContact] = useState(null);

  return (
    <>
    <div className=" ml-64 ">
      <Header/>
    </div>
      <div className=" flex">
        <Sidebar />
        <Chats onselectContact={setselectContact} />
        {selectContact?<ChatWindow  /> : <EmptyChat/>}
        
      </div>
    </>
  );
};

export default MessageContainer;
