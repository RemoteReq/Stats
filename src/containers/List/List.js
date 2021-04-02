import React, { useEffect, useState } from 'react';
// import { Card2 } from '../../components/Card/Card.js';
import './List.css';
import CsvDownload from 'react-json-to-csv'

const List = ({ data, name, Card }) => {
  const [emailList, setEmailList] = useState([]);
  useEffect(() => { 
    if(data){
      if(name === 'Subscribers'){
        setEmailList( data.map(element => { return {'email': element.emailId } }) );
      }else{
        setEmailList( data.map(element => { return { 'name': element.fullName, 'email': element.email } }) );
      }
      
    }
  }, [data]);

  return (
    <div className="list"> 
      <h1>{name}</h1>
      <CsvDownload data={emailList} />
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