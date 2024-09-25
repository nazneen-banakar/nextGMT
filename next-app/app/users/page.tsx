import React from 'react'

interface User{
    id:number;
    name:string
}

const UserPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const users:User[]=await res.json();
    console.log(users);
  return (
    <>
    <h1>List</h1>
    <ul>
        {users.map(user=>
        <li key={user.id}>{user.name}</li>
)}

    </ul>
    </>
  )
}

export default UserPage
