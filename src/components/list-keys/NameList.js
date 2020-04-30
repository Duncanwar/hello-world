import React from 'react';
import Person from './Person'

function NameList() {
    const persons=[{
        id:1,
        name:"Didier",
        Skill:"React"
    },
    {
        id:2,
        name:"Clark",
        Skill:"Angular"
    },
    {
        id:3,
        name:"Derick",
        Skill:"React"
    },

]
const personList=persons.map(person =><Person key={person.id} person={person} />)
        return (
            <div> {personList}   </div>
        );
    
}

export default NameList;