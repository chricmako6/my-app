import PostCard from "./PostCard"
import PostForm from "./PostForm"
import Navigation from "./Navigation"

export default function Layout(){
    return(
        <div className="container my-10 md:my-20 md:mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-4 md:gap-x-5 gap-x-0 grid-cols-1">
              <div>
                < Navigation />
              </div>
  
            <div className="col-span-3">
              <div>
                <PostForm/>
                <PostCard/>
              </div>
            </div>
          </div>
        </div>
    )
}
