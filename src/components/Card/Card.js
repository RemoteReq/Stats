import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import JobStatus from '../JobStatus/JobStatus.js';
import './Card.css';

const Card1 = ({ name, data, path }) => {
  return (
    <Link to={path} className="card">
        <h2>
          {data.length}
        </h2>

        <p>
          {name}
        </p>
    </Link>
  )
}

const Card2 = ({ data }) => {
  return (
    <div className="card">
      <p>{data.emailId}</p>
    </div>
  )
}

const Card3 = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.name}</h2>

      <p>{data.companyName}</p>
      <p>{data.emailId}</p>
      <p>{data.phoneNumber}</p>
      
    </div>
  )
}

const Card4 = ({ data }) => {
  return (
    <div className="card-4">
      <h2>{data.fullName}</h2>
      {
        Object.keys(data).map((key, i) => {
          const value = data[key];
          
          if (Array.isArray(value)) {
            return (
              <div key={i}>
                <h3>{key}</h3>
                <ul>
                {
                  value.map((element, j) => {
                    return(
                      <li key={j}>{element}</li>
                      )
                    })
                }
                </ul>
              </div>
            )
          }

        
          return (
            <div key={i}>
              <h3>{key}</h3>
              <p>{value}</p>
            </div>
          )
        })
      }

    </div>
  )
}

const Card5 = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <JobStatus 
        hasMatches={data.matchesCandidateFlag}
        firstPaymentStatus={data.firstPaymentStatus}
        secondPaymentStatus={data.hiringPaymentStatus}
        hiredStatus={data.hiredStatus}
      />

      <h3>{data.companyName}</h3>

      <p>{data.jobType}</p>
      <p>{data.cause}</p>
      
    </div>
  )
}

const SelectorCard = ({path}) => {
  return (
    <Link to={path} className="card">
        <h2>Select a random winner!</h2>
    </Link>
  )
}

const CouponCard = ({path}) => {
  return (
    <Link to={path} className="card">
      <h2>Coupons</h2>
    </Link>
  )
}

const DefaultCard = ({name, path}) => {

  return (
    <Link to={path} className="card">
      <h3>{name || 'name'}</h3>
    </Link>
  ) 
}

export {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  SelectorCard,
  CouponCard,
  DefaultCard
}