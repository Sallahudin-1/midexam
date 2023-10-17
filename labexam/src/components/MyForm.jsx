import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [city, setCity]= useState({});
  const [occupation,setOccupation] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setCity (event.target.value);
    setOccupation(event.target.value);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  
  function myFunction() {
    document.getElementById("myForm").reset();
  }

  return (
    <form id="myForm" onSubmit={handleSubmit}>
   
     
      <label>Enter your name:     
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
         <label > Select your city : 
        <select value={city} onChange={handleChange}>
        <option value="Atlanta">Atlanta</option>
        <option value="Denver">Denver</option>
        <option value="Boston">Boston</option>
        <option value="Seattle">Seattle</option>
        <option value="Miami">Miami</option>
        <option value="Houston">Houston</option>
        <option value="Los Angeles'">Los Angeles'</option>
        <option value="Chicago">Chicago</option>
        <option value="San Francisco'">San Francisco'</option>
        <option value="New York">New York</option>
         </select>
            </label> 
       


            <label > Select your Occupation : 
        <select  value={city} onChange={handleChange}>
        <option value="Engineer">Engineer</option>
        <option value=" Designer">Designer</option>
        <option value="Accountant">Accountant</option>
        <option value="Teacher">Teacher</option>
        <option value="Doctor">Doctor</option>
        <option value="Artist">Artist</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Marketing Manager'">Marketing Manager'</option>
        <option value="Entrepreneur">Entrepreneur</option>
      
         </select>
            </label>        
            <button >
                Search 
            </button>
            
        <input type="button" onclick="myFunction()" value="Reset form " />



    </form>

  )




}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm;