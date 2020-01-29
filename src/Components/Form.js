import React, {useState} from "react"


function Form(){
    //sets state for current & incoming data
    const [members, setMembers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role:"",
    })

    //spreads original keys & stores each of the values entered
    const teamData = event => {
        setMembers({
            ...members,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className="form-input">
            <h1>Team Builder Sign Up Form</h1>
            <form>
                <label className="labels">First Name:</label>
                    <input onChange= {teamData} name="firstName" type="text" placeholder="First Name"/>
                
                <label className="labels">Last Name:</label>
                    <input onChange= {teamData} name="lastName" type="text" placeholder="Last Name"/>
                
                
                <label className="labels">Email:</label>
                    <input onChange= {teamData} name="email" type="text" placeholder="Email Address"/>
                
        
                <label className="labels">Role:</label>
                    <select onChange= {teamData}>
                        <option value="" disabled selected hidden>Please Select</option>
                        <option>Android Developer</option>
                        <option>Back End Developer</option>
                        <option>Data Scientist</option>
                        <option>Front End Developer</option>
                        <option>iOS Developer</option>
                        <option>UX/UI Designer</option>
                    </select>    
                
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form;