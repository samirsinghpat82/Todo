import React ,{useState} from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add'
import ListCom from "./ListCom";
import {Navbar, Nav, Form, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () =>
{
    const [item,setItem]= useState("");
   var [key, setKey]= useState (1);
    const [newitem,setNewItem]= useState([]);

    const itemEvent = (event) => {
        setItem (event.target.value);
    }

    const listOfItems = () => {
        setNewItem ((prevalue) => {
            return [...prevalue,item];
        } );
        setItem("")  
    };

    return (
        <>
        <Navbar bg="light" variant="light">
       
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick = {() => setKey (1)}>Home</Nav.Link>
          <Nav.Link href="#features" onClick = {() => setKey (2)}>About Us</Nav.Link>
          <Nav.Link href="#pricing"  onClick = {() => setKey (3)}>Policy</Nav.Link>
          <Nav.Link href="#pricing" onClick = {() => setKey (4)}>Services Page</Nav.Link>
        </Nav>
       
      </Navbar>

   {
       key==1 ?(<div className="main_div1">

    <div className="center_div">
   
    <br/>
    
    <input type="text" value={item} placeholder= "Add work" onChange={itemEvent} />
    
    <Button className="newBtn" onClick={listOfItems}>
    <AddIcon />
    </Button>
    <br/>
    <ol>
    
    {newitem.map((val,index) =>
        {
            return <ListCom key={index} text={val} /> 
        }
        )}
    
    </ol> 
    <br/>
    
    </div>
    </div>
    ) :
    key==2 ?(<div style={{color:'pink'}} className="main_div2" >

    <div className="center_div">
   
    <br/>
    
    <input type="text" value={item} placeholder= "Add work" onChange={itemEvent} />
    
    <Button className="newBtn" onClick={listOfItems}>
    <AddIcon />
    </Button>
    <br/>
    <ol>
    
    {newitem.map((val,index) =>
        {
            return <ListCom key={index} text={val} /> 
        }
        )}
    
    </ol> 
    <br/>
    
    </div>
    </div>
    ) :

    key==3 ?(<div style={{color:'pink'}} className="main_div3" >

    <div className="center_div">
   
    <br/>
    
    <input type="text" value={item} placeholder= "Add work" onChange={itemEvent} />
    
    <Button className="newBtn" onClick={listOfItems}>
    <AddIcon />
    </Button>
    <br/>
    <ol>
    
    {newitem.map((val,index) =>
        {
            return <ListCom key={index} text={val} /> 
        }
        )}
    
    </ol> 
    <br/>
    
    </div>
    </div>
    ) :

    key==4 ?(<div style={{color:'pink'}} className="main_div4" >

    <div className="center_div">
    
    <br/>
    
    <input type="text" value={item} placeholder= "Add work" onChange={itemEvent} />
    
    <Button className="newBtn" onClick={listOfItems}>
    <AddIcon />
    </Button>
    <br/>
    <ol>
    
    {newitem.map((val,index) =>
        {
            return <ListCom key={index} text={val} /> 
        }
        )}
    
    </ol> 
    <br/>
    
    </div>
    </div>
    ) :
    ('')
 }


        </>
    );
}


export default ToDoList;