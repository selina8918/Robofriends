import React from 'react';
const Card = (props) =>{
    const { name,email,id} = props;
    return(
 <div className =' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
     <img alt ="robort" src ={ `https://robohash.org/${id}?200*200" `} />
     <div> 
         <h4>{name}</h4>
         <p>{email}</p>
         </div>
     </div>
 
    );
}

export default Card;
