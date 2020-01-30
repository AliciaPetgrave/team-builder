import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form"
import Members from "./Components/Members"

function App() {

  //list of current members
  const [team, setTeam] = useState([{
    firstName: "Alicia",
    lastName: "Petgrave",
    email: "alicia.petgrave@gmail.com",
    role:"Front End Developer",
  },

  { firstName: "Peter",
    lastName: "Parker",
    email: "spideypete@gmail.com",
    role:"UX/UI Designer",
}
])

//takes the current state ^ & adds new members to the list
  const addNewMember = e => {
    const newMember = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      role: e.role,
    }
    setTeam([...team, newMember])
  }
  

  return (
    <div className="App">
      <Form add = {addNewMember}/>
      <br></br>
      <hr></hr>
      <br></br>
      <Members teamMembers = {team}/>
    </div>
  );
}

export default App;
