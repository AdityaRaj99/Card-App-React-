import React,{useState} from 'react';

export const UserSearch=({addUser})=>{
    const[inputTxt, setinputTxt]= useState('');
    const searchUser=async(event)=>{
      event.preventDefault();
      const fetchPromise=await fetch(`https://api.github.com/users/${inputTxt}`);
      const user = await fetchPromise.json();
      console.log(JSON.stringify(user));
      addUser(user);
      setinputTxt('');
    }
  return <form onSubmit={searchUser}>
    <input value={inputTxt} onChange={(event)=>setinputTxt(event.target.value)}/>
    <button>Add</button>
    </form>
  };