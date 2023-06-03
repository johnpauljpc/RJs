// import logo from './logo.svg';

import './App.css';

import Navbar  from './Navbar';
import Home from './Home';


function App() {
  // const name = 'Johnpaul';
  // const List = [{name:'John', age:25}, {name:'paul', age:26}]


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
