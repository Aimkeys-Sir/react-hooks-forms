import DisplayData from "./DisplayData";

function Form({firstName,lastName
  ,handleFirstNameChange, handleLastNameChange}) {

  return (
    <div>
        <form>
      <input type="text" placeholder="First name" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" placeholder="Last name" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  
  );
}

export default Form;
