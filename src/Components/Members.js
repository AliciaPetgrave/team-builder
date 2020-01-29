import React, {useState} from "react"


// goes through list of current members and outputs data being entered
function Members (props){

    return(
        <div>
            <h2>Current Members</h2>
            {props.teamMembers.map(person => {
                return (
                    <p>{person.firstName} {person.lastName}
                    <br></br>{person.email}<br></br>{person.role}</p>
                )
            })}
            
        </div>
    )
}

export default Members