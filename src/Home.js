import { useState } from "react";
const Home = () => {
    const [myName, setName] = useState('Johnpaul')
    
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
        </div>
     );
}
 
export default Home;