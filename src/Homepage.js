import { useState, useEffect } from 'react'
import BlogList from './blogList.js'

const Home = () => {

  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
        setIsPending(false)
      })
      .catch((e) => {
        console.log(e.message)
      })
  },[])

  return ( 
    <div className="home">
      { isPending && <div> Loading ... </div>}
        {blogs && <BlogList blogs={blogs} title="New Blogs!"/>}
        <h2></h2>
    </div>
   );
}
 
export default Home;

