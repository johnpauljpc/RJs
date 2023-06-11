import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [myName, setName] = useState('Johnpaul')
    const [blogs, setBlogs] = useState([
        {title:"post1", body:"this is post1", author:"John", id:1},
        {title:"post2", body:"this is post2", author:"Paul", id:2},
        {title:"post3", body:"this is post3", author:"Chigozie", id:3}
    ])
   
    return ( 
        <div className="home">
                <BlogList blogs = {blogs} title ="All blogs"/>
            
        </div>
     );
}
 
export default Home;