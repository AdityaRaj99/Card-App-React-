import React from 'react';

const Card=({user})=>{
    return <div style={{display:'flex',margin:' 20px'}}>
      <img src={user.avatar_url} alt={user.name} style={{height:'180px',width:'180px'}}/>
      <div style={{marginLeft:'10px'}}>
      <h4>{user.name}</h4>
      <h5>{user.company}</h5>
      </div>
    </div>
  }


  export default Card;