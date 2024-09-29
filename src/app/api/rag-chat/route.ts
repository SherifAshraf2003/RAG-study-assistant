
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { ragChat } from "../../../lib/rag-chat";



export const POST = async (req: Request) =>{
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content;
  await ragChat.context.add({
    type: "pdf",
    source: "../../public/test.pdf",
  })
  try {
    const response = await ragChat.chat(lastMessage);
    return aiUseChatAdapter(response);
  }catch (error) {
    console.log(error);
  }

}