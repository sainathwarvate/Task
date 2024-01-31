import logo from './logo.svg';
import './App.css';
import {useState ,useEffect } from 'react';
import moment from "moment";



//import {FirstComponent} from './Application/FirstComponent'

function App() {

  const DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const [day, setDay] = useState(null);
  const [dayName, setDayName] = useState(null);


  const  [inputmessage, setinputMessage] = useState('');

  const  [inputDes, setinputDes] = useState('');

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`; 

  const  [inputDate, setinputDate] = useState('');

  useEffect(() => {
    const date = new Date("2024-01-31");

    const dayIndex = date.getDay();
    setDayName(DAY_NAMES[dayIndex]);
    setDay(dayIndex);
  }, []);

  
  const handleChange = event => {
    setinputMessage(event.target.value);

    console.log('value is:', event.target.value);
  };


  const handleChangeDis = event => {
    setinputDes(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleChangeDate = event => {
    setinputDate(event.target.value);

    console.log(dayName)

    console.log('value is:', event.target.value);
    
  };


  
  const handleClick = () => {
   
    if(inputmessage===null|| inputmessage==="" ){
      
    alert("please enter value in input ");
    
  }

  else{
    

  }

  



   // const inputvalue = getelement


};

  return (
    <div className="App">
      <header className="App-header">
      welcome To application 
       
      
      </header>
      <div class="container overflow-hidden">
      


    <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">  <input type='text' name='inputmessage '  id='inputmessage' placeholder='Tittle'  onChange={handleChange}
        value={inputmessage}></input></div>
     
    </div>
    <div class="col">
      <div class="p-3"><input type='date' min={date}  name='inputDate' id='inputDate'  onChange={handleChangeDate}  value={inputDate} ></input></div>
    </div>
  </div>
</div>

     
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3"> <input type='text' name='Description' placeholder='Description'  ></input> </div>
    </div>
    <div class="col">
      <div class="p-3"><button  onClick={handleClick}> save</button></div>
    </div>
  </div>
</div>


        


        </div>


        <div className='daysbutton'>
        <div class="btn-group" role="group" aria-label="Basic example">

        <button > sunday</button> 
        <button>monday</button> 

        <button >Tuesday</button>
        <button>wednesday</button>
        <button>Thursday</button>
        <button>Firday</button>
        <button>Saturday</button>
        </div>

        </div>

        <div>

        </div>
      
    </div>

    

  );

 
  
}

export default App;
