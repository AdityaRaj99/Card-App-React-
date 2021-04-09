import React, {useState} from 'react';
import{UserSearch} from './userSearch';
import CardList from './cardList';

const Container=()=>{
    const[users, setUser]=useState([]);
    return <>
      <UserSearch addUser={(data)=>{setUser([data,...users])}} />
      <CardList users={users}/>
    </>
}

export default Container;