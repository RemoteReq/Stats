import React from 'react';
import './JobStatus.css';

/* 
  Like traffic lights to view which state the job is in
  Green means finished
  Yellow means matches are being viewed
  Red means its posted (no payments happening)
*/

/*
  States of Jobs:

  1) Posted (no 1st payment made)
  2) 1st payment made (viewing matches)
  3) job expired
  4) 
*/

const ColorResovler = (state) => {
  let color = '';

  switch(state) {
    case false: 
      color = 'red';
      break;
    case null:
      color = 'red';
      break;
    case true:
      color = 'green';
      break;
    default:
      color = 'yellow';
  }

  return color;
}

const Status = ({name, data}) => {
  const color = ColorResovler(data);

  return (
    <div className="status">
      <div 
        className="status-light"
        style={{
          backgroundColor: color
        }}
      ></div>

      <p>{name}</p>
    </div>
  )
}

const JobStatus = ({ 
  hasMatches,
  firstPaymentStatus, 
  secondPaymentStatus,
}) => {
  

  return (
    <div className="job-status">

    <Status name="Matches" data={hasMatches}/>
    <Status name="First Payment" data={firstPaymentStatus}/>
    <Status name="Second Payment" data={secondPaymentStatus}/>

    </div>
  )
}

export default JobStatus;