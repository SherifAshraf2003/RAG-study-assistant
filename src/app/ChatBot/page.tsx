"use client";
import Messages from "../../components/Messages";
import { Button } from "@/components/ui/button";
import sendImage from "../../public/send.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useChat } from "ai/react";
import { ragChat } from "../../lib/rag-chat";

type Message = {
  text: string;
  sender: "user" | "chatBot";
};

const Chatbot =  () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/rag-chat",
  });
  const [message, setMessage] = useState("");
  



  const handleClick = async () => {
    // Your handleClick logic here
  };

  return (
    <section className="flex items-center justify-center flex-col h-[100vh]">
      <div className="w-[520px] h-[590px] bg-black rounded-t-2xl overflow-auto ">
        {messages.map((msg, i) => (
          <Messages key={i} message={msg.content} sender={msg.role} />
        ))}
      </div>

      <div className="flex mt-1 gap-1 w-[520px] ">
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              setMessage("");
            }
          }}
          placeholder="Type your message here..."
          className="h-16 text-sm border-none outline-none bg-orange-500 break-words overflow-hidden p-3 resize-none placeholder-black w-full "
          autoFocus
        />
        <Button onClick={handleSubmit}  className=" text-white bg-black h-16">
          upload
        </Button>
      </div>
    </section>
  );
};

export default Chatbot;
