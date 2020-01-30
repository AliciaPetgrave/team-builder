import React, {useState} from "react"


function Form(props){
    //sets state for current & incoming data
    const [member, setMember] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role:"",
    })

    //spreads original keys & stores each of the values entered
    const memberData = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        })
    }

    //adds new member when submit is clicked
    const submit = event => {
        event.preventDefault()
        props.add(member)
        setMember({
            firstName: "",
            lastName: "",
            email: "",
            role:"",
        })
    }

    return(
        <div className="form-input">
            <h1>Team Builder Sign Up Form</h1>
            <form onSubmit={submit}>
                <label className="labels">First Name:</label>
                    <input onChange= {memberData} name="firstName" type="text" value={member.firstName} placeholder="First Name"/>
                
                <label className="labels">Last Name:</label>
                    <input onChange= {memberData} name="lastName" type="text" value={member.lastName} placeholder="Last Name"/>
                
                
                <label className="labels">Email:</label>
                    <input onChange= {memberData} name="email" type="text" value={member.email} placeholder="Email Address"/>
                
        
                <label className="labels">Role:</label>
                    <select onChange= {memberData} name="role" value={member.role}>
                        <option selected >Please Select</option>
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