import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {DefaultCard} from '../../components/Card/Card.js';

const JobBoard = () => {
  return (
    <div className="dashboard">
      <p>In the Job Board</p>

      <DefaultCard 
        path="/jobBoard/add"
        name="add a job to database"
      />

      <DefaultCard 
        path="/view"
        name="view jobs you've added"
      />


      <Switch>
        <Route path="/jobBoard/add">
          <div>Form</div>
        </Route>

        <Route></Route>
      </Switch>
    </div>
  )
}

export default JobBoard;