import React from 'react';
// import { Card2 } from '../../components/Card/Card.js';
import './List.css';

const List = ({ data, name, Card }) => {
  return (
    <div className="list"> 
      <h1>{name}</h1>

      {
        data ? 

        data.map((item, i) => {
          return (
            <Card data={item} key={i}/>
          )
        })

        :

        <div>loading ...</div>
      }
    </div>
  )
}

export default List;