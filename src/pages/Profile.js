import Navigation from "../components/Navigation"
import Card from "../components/Card"
import Avatar from "../components/Avatar"
import {Link} from "react-router-dom"
import PostCard from "../components/PostCard"


export default function Profile(){
  const activeTab = "flex gap-1 items-center bg-Social text-white md:rounded-md rounded-full md:p-4 md:py-2 p-3"
  const nonactiveTab = "flex gap-1 items-center hover:bg-social md:-mx-1 md:px-2 md:py-2 md:rounded-md rounded-full p-3 py-3 hover:text-white transition-all hover:scale-105"
  
    return(
      <div className="container my-10 md:my-20 mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-4 md:gap-x-5  gap-x-0 grid-cols-1">
          <div>
           <Navigation/>
          </div>
         
          <div className="col-span-3 ">
            <Card noPadding={true}> 
              <div className="relative">
                <div className="h-36 overflow-hidden rounded-md relative justify-center items-center">
                  <img src="https://images.unsplash.com/photo-1516918656725-e9b3ae9ee7a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=""/>
                </div>

                <div className="absolute top-14 md:left-4 left-28">
                  <Avatar size={'lg'}/>
                </div>

                <div className="p-4">
                  <div className="md:ml-40 ml-28">
                    <h1 className=" md:text-3xl text-2xl md:pt-0 pt-10 font-bold">
                      Chris Dev.
                    </h1>
                    <div className="text-gray-500 leading-4">
                      Tanzania, Arusha
                    </div> 
                  </div>
                </div> 

                <div className="md:mt-2 mt-0 flex md:left-5 md:gap-6 gap-12 items-center p-4">
                  <Link to="" className={activeTab}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
                  <span className="hidden md:block">Posts</span>
                  </Link>

                  <Link to="" className={nonactiveTab}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
                  <span className="hidden md:block">About</span>
                  </Link>

                  <Link to="" className={nonactiveTab}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
                  <span className="hidden md:block">Friends</span>
                  </Link>

                  <Link to="" className={nonactiveTab}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
                   <span className="hidden md:block">Photos</span>
                  </Link>
                </div>
              </div>
            </Card>
            <PostCard />
          </div>
        </div>

      </div>
      
    )
}
 