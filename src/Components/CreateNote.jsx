import react, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import  Button  from "@material-ui/core/Button";

const CreateNote=(props)=>{
  const [expand,setExpand]=useState(false);
  const[note,setNote]=useState({
    title:"",
    content:""
  });
  const InputEvent=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    // or by object destructuring
    // const{name,value}=event.target;
    setNote((prev)=>{
      return {
        ...prev,[name]:value
      }
    })
    console.log(note)
  }
  const addEvent=()=>{
    props.passNote(note);
    setNote({
      title:"",
      content:""
    });
  };
  const expandIt=()=>{
    setExpand(true);
  }
  const shrinkIt=()=>{
    setExpand(false)
  }
   
  return(
    <>
    <div className="main_note"onDoubleClick={shrinkIt} >
   <form>
     {expand?
     <input type="text" placeholder="Title" autoComplete="off" name="title" onChange={InputEvent} value={note.title}/> :null}
     <textarea rows="" column="" placeholder="Write a note......" name="content" onChange={InputEvent} value={note.content}
     onClick={expandIt} ></textarea> 
     <Button><AddIcon className="plus_sign" onClick={addEvent} /></Button>
   </form>
    </div>
    </>
  )
}
export default CreateNote;