import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import MailBox from "./MailBox";
import Options from "./Options"; 
import Images from "./Images";
import Quote from "./Quote";
import { StateProvider } from "./Datalayer";


function App() {
  return (
    <div className="App">
      
      <StateProvider>
        <Navigation/>
        <Options />    
        <MailBox />
      </StateProvider>
           
      
     
     
   
      <Images/>
    
      <Quote />
     
      
      
     
    </div>
  );
}

export default App;
