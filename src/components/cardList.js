import React from 'react';
import Card from './card';

const CardList=({users})=>{
    return<> {users.map((item)=>
    <Card key={item.id} user ={item}/>
    )}</>
   }

   export default CardList;