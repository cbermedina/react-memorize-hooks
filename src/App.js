import React, { useState, useEffect, useCallback } from 'react';
import { useMemo } from 'react';
import List from './List';
const initialUsers =[
  {
    id:1,
    name:"Luis"
  },
  {
    id:2,
    name:"Pablo"
  },
  {
    id:3,
    name:"Catalina"
  }
];

function App() {
  const [users, setUsers ]= useState(initialUsers);
  const [text, setText ]= useState("");
  const [search, setSearch ]= useState("");
  const handleAdd = () =>{
    const newUser = {
      id: Date.now(),
      name: text
    };
    setUsers([...users,newUser]);
  };

  const handleDelete = useCallback((userId) =>{
    setUsers(users.filter(user=>user.id !== userId));
  },[users]);

  const filteredUsers = useMemo(()=>users.filter((user)=>
  {
   // console.log("Filter process");
    return user.name.toLowerCase().includes(search.toLowerCase());
  }),[search,users]);

  const handleSearch = () =>{
    console.log("handleSearch");
    setSearch(text);
  };

  const printUsers =useCallback(() =>{
    console.log("changed users",users);
    setSearch(text);
  },[users]);

  useEffect(()=>{
    console.log("App render")
  });

  useEffect(()=>{
    printUsers();
  },[users, printUsers]);
  return (
    <div >
      <input type="text" value={text} onChange={ (event)=>{ setText(event.target.value) }}></input>
      <button onClick={ handleSearch }>Search</button>
      <button onClick={ handleAdd }>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete}></List>
    </div>
  );
}

export default App;
