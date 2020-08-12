import React, { useState } from 'react';
import FormList from './FormList'


function Form(props) {
    const [newMember, setNewMember] = useState({
        memberName: '',
        email: '',
        role: ''
    })

    const handleChange = event => {
        setNewMember({
            ...newMember, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.setMembers([...props.members, newMember])
        resetForm(event);
    }

    const resetForm = event => {
        event.preventDefault();
        setNewMember({
            memberName: '',
            email: '',
            role: ''
        });
    }
     
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type='text'
                    name='memberName'
                    id=''
                    placeholder='First and last name'
                    value={newMember.memberName}
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='email'
                    id=''
                    placeholder='Your Email'
                    value={newMember.email}
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='role'
                    id=''
                    placeholder='Your Role'
                    value={newMember.role} />

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
export default Form