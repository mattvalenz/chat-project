import  { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useChatStore } from "../../store/useChatStore";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore();
  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) return <p>Loading...</p>;

  return (
    <div>
      <ChatHeader />
      <p>messages... </p>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
