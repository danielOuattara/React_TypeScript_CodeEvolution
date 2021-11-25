import React from 'react';
import './App.css';
import { ButtonComponent } from './components/ButtonComponent';
import { Input } from './components/Input';


function App() {

  const handleClick = () => console.log("Hello TypeScript");

  const handleClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  }

  const handleClickEventId = (event: React.MouseEvent<HTMLButtonElement>, id:number) => {
    console.log(event)
    console.log(id)
  }

  return (
    <div className="App">
      
     1<button onClick={() => console.log('Simple Button')}>Simple Button</button>  <br /><br />

      <hr />
      
      2 <ButtonComponent onClick={() => console.log('Hello React')} />  
      3 <ButtonComponent handleClick={handleClick} /> 

      <hr />
  
      4 <ButtonComponent handleClickEvent={handleClickEvent} />  
      5 <ButtonComponent handleClickEvent={(event) => console.log('Button Event',event)} /> 

      <hr />

      6 <ButtonComponent handleClickEventId={handleClickEventId} />
      <ButtonComponent handleClickEventId={(event, id) => {
          console.log('btn clicked! ',event, id)}}
      /> 

      7 <Input value='' handleChange={(event) => console.log(event)} /> 

    </div>

  );
}

export default App;
