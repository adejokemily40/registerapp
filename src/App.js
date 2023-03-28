import pickImage from './images/vegetable_gtngc9-Square.png'
import React, {useState} from "react"

function App() {

  const [formData, setFormData] = useState({
    fullname:"",
    email:"",
    description:"",
    country:"",
    gender:"",
    agree: false

  })

  const handleChange = (e) => {
    const {value, name, type, checked} = e.target
    setFormData((state)=>({
      ...state,
      [name]: type ==="checkbox" ? checked : value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form", formData)

  }




  return (
    <div className="flexContainer">
        <div className="bgSection">
          <img src={pickImage} alt= "food-plate" width="" height="500px"/> 
          </div>
          <div className="formData">
            <h1>REGISTER TO ORDER!</h1>
            <form onSubmit={handleSubmit}>
              <input className="field" value={formData.fullname} type="text" onChange={handleChange} name="fullname" placeholder= "Full name"/><br/>
              <input className="field" value={formData.email} type="email" onChange={handleChange}  name="email"placeholder= "Email"/><br/>
              <input className="field" value={formData.description} type="description" onChange={handleChange} name="description" placeholder= "Description"/><br/>
              <select className="fieldSelect"value={formData.country} name="country"onChange={handleChange}>
                <option value= "country">Country</option>
                <option value= "nigeria">Nigeria</option>
                <option value= "united state">United State</option>
                <option value= "canada">Canada</option>
                <option value= "united kingdom">United Kingdom</option>
                <option value= "south africa">South Africa</option>
              </select>

              <div className="radio">
                <label>Gender:</label>
                <label for="male">Male</label>
                <input type="radio" name="gender" value="male"onChange={handleChange} checked={formData.gender ==="male"}/>

                <label for="female">Female</label>
                <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender ==="female"}/>

            
                <label for="other">Other</label>
                <input type="radio" name="gender"value="other"onChange={handleChange} checked={formData.gender ==="other"}/>
              </div>
              <div className="checkbox">
                
                <label for="agree">Agree:</label>
                <input type="checkbox" name="agree" value={formData.agree} onChange={handleChange} />
              </div>

              <button className="btn" type="submit">Submit</button>
              
              
            </form>
          </div>
      
      
    </div>
  );
}

export default App;
