import React, { useState } from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import Footer from "./Components/Footer"

const App=()=>{
  const[addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    // alert("we are here")
setAddItem((prev)=>{
  return [...prev,note];
})    
console.log(note);
  }
  const onDelete=(id)=>{
 setAddItem((oldData)=>
   oldData.filter((currval,index)=>{
     return index!==id;
 })
 )};
  return(
    <>
    <Header/>
    <Footer/>
    <CreateNote 
    passNote={addNote} />
 
   { addItem.map((val,index)=>{
     return (<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />)
    })}
    </>
  )}

  export default App;