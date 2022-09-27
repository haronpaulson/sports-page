import React, {useState} from "react";
import "./MailBox.css";
import { useStateValue } from "./Datalayer";

function MailBox() {
    const [val, dispatch] = useStateValue();
    
    //const[vale, setName] = useState("")
   

  return (
    <div className="boxx">
        <div className='mail-box'>
            <h3 style={{paddingRight:'55px'}}>PROGRAMS TAILORED TO YOUR NEED</h3>
            <input type="text" placeholder="Enter Your Name" className="input-area"  name="guestName" onChange={(e) => { dispatch(e.target.value)
                console.log(val)
            }}></input>
            <button className="join-us" >JOIN US</button>
      
        </div>
    </div>
  )
}

export default MailBox;
