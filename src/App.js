// import logo from './logo.svg';



import Navbar  from './Navbar';
import Home from './Home';


function App(props) {
  console.log(props)
  // const name = 'Johnpaul';
  // const List = [{name:'John', age:25}, {name:'paul', age:26}]
  // console.log(List)


  return (
    
    <div className="App">
      <Navbar />
      <div className='content '>
      <Home/>
      
        
      </div>
    </div>
  );
}

export default App;
