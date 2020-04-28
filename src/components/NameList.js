import React, { Component } from 'react';
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
const personList=persons.map(person =><Person person={person} />)
        return (
            <div> {personList}   </div>
        );
    
}

export default NameList;