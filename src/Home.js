import { useState } from "react";
const Home = () => {
    const [myName, setName] = useState('Johnpaul')
    const [blogs, setBlogs] = useState([
        {title:"post1", body:"this is post1", author:"John", id:1},
        {title:"post2", body:"this is post2", author:"Paul", id:2},
        {title:"post3", body:"this is post3", author:"Chigozie", id:3}
    ])
    const handleClick = () =>{
        console.log("clicked me!")
        if (myName ==='Johnpaul'){
            setName ('JPC')
        }
        else{
            setName ('Johnpaul')
        }
    }
    const clickMeAgain = (name1)=>{
        console.log(`hello ${name1}`)
    }
    return ( 
        <div className="home">
            <p>Home page {myName}</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>{
                clickMeAgain('Johnpaul')
            }}>Click me again</button>

            
                {
                    blogs.map(blog => (
                        <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>written by: {blog.author}</p>

                        </div>
                    ))
                }
                
            
        </div>
     );
}
 
export default Home;