import React, {useState} from "react";
import {BsFillMenuButtonFill} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import "./Navigation.css";
import {BiRightArrow} from "react-icons/bi";
import {AiOutlineDown} from "react-icons/ai";
import {FaRegHandPaper} from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useStateValue } from "./Datalayer";




function Navigation() {
    const val = useStateValue();
  
  const[dropdown, setDropdown] = useState(false);
  //const[hoverdown, setHoverDown] = useState(false);
  return (
    <div className='navigation'>
        <div>
            <div className='navigation-bar'>
                <div className='main-menu-icon' >

                    <BsFillMenuButtonFill onClick={() => setDropdown(!dropdown)} style={{cursor:'pointer'}}/>
                    <AiFillCaretDown className="down-icon" onClick={() => setDropdown(!dropdown)}/>
                    <div >
                       {dropdown && <Dropdown/>}

                    </div>
                    <div >
                      
                    </div>
                    <div className='hands' style={{backgroundColor:'blue', height:'60px',marginLeft:'10px'}}>
                        <FaRegHandPaper style={{marginLeft:'2px', marginTop:'10px',height:'30px',backgroundColor:'blue', width:'40px'}}/>
                    </div>
                </div>
                <div>
                    <p1 style={{fontSize:'25px', fontWeight:'500'}}>No Human Is Limited- <span style={{color:'green', fontWeight:'900'}}>Lets make it a Running World</span></p1>
                    
                </div>
              
                <div style={{display:'flex'}} className="box">
                   
                        <p1 style={{paddingRight:'15px'}}>Welcome,{val}</p1>
                    
                    
                    <button className='log-in'>Log In</button>
                    <BiRightArrow className='right-arrow'/>
                    <div className='zoom'>
                        <p2 style={{paddingRight:'5px'}}>3%</p2>
                        <AiOutlineDown style={{marginTop:'8px'}}/>

                    </div>
                </div>


            </div>
           
        </div>
      
    </div>
  )
}

export default Navigation;