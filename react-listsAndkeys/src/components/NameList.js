import React from 'react'
function NameList()
{
    const persons =[
    {
        id: 1, 
        name:'Sneka',
        age: 22,
        skill:'React'
    },
    {
        id:2,
        name:'Latha',
        age:23,
        skill:'Angular'
    }, 

    {
        id:3,
        name:'Kumar',
        age:24,
        skill:'Perl'
    }
]
    
    const personList = persons.map(person => <h1>I am {person.name}.I am {person.age} years old . I know {person.skill}</h1>)
    return <div>{personList}</div>
}
export default NameList