import { useState } from "react";
import Form from "./Form";

export default function Parent(){
    const [firstName, setFirstName] = useState("Aimkeys");
    const [lastName, setLastName] = useState("Mwaura");
  
    function handleFirstNameChange(e){
        console.log(e.target.value)
      setFirstName(e.target.value)
    }
  function handleLastNameChange(e){
    setLastName(e.target.value)
  }
  return(
    <Form firstName={firstName} lastName={lastName}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}/>
  )
}