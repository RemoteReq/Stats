import React from 'react';
import {Card4} from '../Card/Card.js';

const RandomSelector = ({employers, users}) => {
  const array = employers.concat(users);

  const filteredArray = array.filter((user) => {
    if (user.profileCompleteStatus) {
      return user;
    }
  })
  .filter((user) => {
    if (user.timeZone === "-06:00") {
      return user;
    }
  })

  console.log(filteredArray);

  const winner = filteredArray[Math.floor(Math.random() * filteredArray.length)]
  
  return (
    <div className="list">
      <h1>Winner!</h1>

      <Card4 data={winner}/>
    </div>
  );
}

const Selector = ({employers, users}) => {
  return (
    <div>
      {
        employers && users ? 
          
          <RandomSelector employers={employers} users={users}/>

        :

        <div> loading </div>
      }
    </div>
  )
}

export default Selector;