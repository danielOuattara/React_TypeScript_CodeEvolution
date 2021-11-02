import React from 'react';
// import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';


function App() {

  const handleClick = () => {
    console.log("Hello TypeScript")
  }

  const handleClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)
  }

  // const handleClickEventId = (event: React.MouseEvent<HTMLButtonElement>, id:number) => {
  //   console.log(event)
  //   console.log(id)
  // }

  return (
    <div className="App">
      <Button handleClick={() => {
        console.log('Hello React ')}}/>
      <Button handleClick={handleClick}/>

      <hr />
  
      <Button handleClickEvent={handleClickEvent}/>

      <Button handleClickEvent={(event) => {
        console.log(event)
      }}/>

      <hr />

      {/* <Button handleClickEventId={handleClickEventId} /> */}
      
      {/* <Button 
        handleClickEventId={(event, id) => {
          console.log('btn clicked! ',event, id)}}
      /> */}

      <Input value='' handleChange={(event) => console.log(event) } />

    </div>

  );
}

export default App;
