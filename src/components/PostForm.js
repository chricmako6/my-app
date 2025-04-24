import Card from "./Card"
import Avatar from "./Avatar"
import { Link } from "react-router-dom"

export default function PostForm(){
    return(
     <Card>
        <div className="flex gap-3">
            <div className="">
              <Link to="../Profile">
               <Avatar/>
              </Link>
            </div>
           <textarea className="grow p-3 h-12" placeholder={'What on your mind...'}/>
        </div>

        <div className="flex gap-5 mt-2 items-center">
            <div>
             <button className="flex gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
                <span className="hidden md:block">People</span>
                </button>
            </div>

            <div>
              <button className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
                <span className="hidden md:block">Check In</span>
                </button>
            </div>

            <div>
              <button className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
               <span className="hidden md:block">Mood</span>
                </button>
            </div>
           
           <div className="grow text-right">
            <button className="bg-Social text-white px-6 py-1 rounded-md">Share</button>
           </div>
           
        </div>
     </Card>
    )
}
