import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import FormList from './FormList'


function App() {
    const [members, setMembers] = useState([{
      memberName: 'Hingle McCringleberry',
      email: 'HingleMcCringleberry@gmail.com',
      role: 'Designer'
    },
    {
      memberName: 'Tyroil Smoochie-Wallace',
      email: 'TyroilSmoochie-Wallace@gmail.com',
      role: 'Front End'
    },
    {
      memberName: 'Ibrahim Moizoos',
      email: 'IbrahimMoizoos@gmail.com',
      role: 'Back End'
    },
    {
      memberName: 'Javaris Jamar Javarison-Lamar',
      email: 'JavarisJamarJavarison-Lamar@gmail.com',
      role: 'Architect'
    },
    {
      memberName: 'Hingle McCringleberry',
      email: 'HingleMcCringleberry@gmail.com',
      role: 'Designer'
    }
    ])
  
  
  
    return (
      <div className="App">
        <h1>Add Team Member</h1>
        <Form members={members} setMembers={setMembers} />
        <FormList members={members} />
  
      </div>
    );
  }


export default App;
