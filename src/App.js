
import './App.css';
import Amazon from './components/Amazon';
import Apple from './components/Apple';
import Card from './components/Card';
import {useState} from "react";


function App() {
  const [Toggle, setToggle] = useState(false)
  return (
    <>
      <Card
          bgcolor= "yellow-color"
          date="28/10/2020"
          logo= {<i class="fa-brands fa-amazon"></i>}
          gift="Amazon Gift"
          pay="Pay"
          mode= "Desktop - Mobile"
      />
      <Card
          bgcolor= "white-color"
          date="17 Sep 2020"
          logo= {<i class="fa-brands fa-apple"></i>}
          gift="Apple Gift"
          pay="Payment"
          mode= "MacOS - Mobile"
      />

      <p className='seperator'> *****************************************************************************************************</p>

      
     
      <div className='toggle-div'>
        <button className='toggle-btn' onClick={() => setToggle(!Toggle)}>Toggle</button>
        {Toggle ? <Amazon/> : <Apple/> }
      </div>
    </>
  );
}

export default App;
