
import {Button} from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-[100vh] justify-center items-center ">
      <div className="flex flex-col ">
        <h1 className="text-5xl font-light text-center border-solid mb-10">Study Assistant</h1>
        <h2 className="text-4xl font-light text-center mb-11">Elevate Your studying game</h2>
          <Link href="/ChatBot" className="w-fit text m-auto  ">
            <Button  className=" w-fit text m-auto">
                Get Started
            </Button>
          </Link>
      </div>
    </div>    
  )
}
