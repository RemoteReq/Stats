import React, { Component } from 'react'
import Dashboard from './containers/Dashboard/Dashboard.js';
import List from './containers/List/List.js';
import Selector from './components/Selector/Selector.js';
import { Card2, Card3, Card4, Card5 } from './components/Card/Card.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';

const { NODE_ENV } = process.env;

const API = `https://api.remotereq.com`;

console.log(NODE_ENV)

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const [ response1, response2, response3, response4, response5 ] = await Promise.all([
      // GET Demo Requests
      fetch(`${API}/api/requestDemo/getDemoReqeusts`, {
        method: 'POST'
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // console.log('response1', json);
        
        return(json);
      })
      .catch(error => console.log(error)),

      // GET Subscribers
      fetch(`${API}/api/subscribe/getSubscribers`, {
        method: 'POST'
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // console.log('response2', json);
        return(json);
      })
      .catch(error => console.log(error)),

      // GET All Users
      fetch(`${API}/api/global/getAllUsers`, {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log('response3', json);
        return json;
      })
      .catch(error => console.log(error)),

      // GET All Employers
      fetch(`${API}/api/global/getAllEmployers`, {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log('response4', json);
        return json;
      })
      .catch(error => console.log(error)),

      // GET All Jobs
      fetch(`${API}/api/global/getAllJobs`, {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log('response5', json);
        return json;
      })
      .catch(error => console.log(error)),
    ]);

    this.setState({
      demoRequests: response1,
      subscribers: response2,
      users: response3,
      employers: response4,
      jobs: response5
    });
  }

  render() {
    const { demoRequests } = this.state;
    const { subscribers } = this.state;
    const { users } = this.state;
    const { employers } = this.state;
    const { jobs } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard  subscribers={subscribers} 
                          demoRequests={demoRequests}
                          users={users}
                          employers={employers}
                          jobs={jobs}
                          />
            </Route>

            <Route path="/subscribers">
              <List name="Subscribers" data={subscribers} Card={Card2}/>
            </Route>

            <Route path="/demos">
              <List name="Demos" data={demoRequests} Card={Card3}/>
            </Route>

            <Route path="/users">
              <List name="Users" data={users} Card={Card4}/>
            </Route>

            <Route path="/employers">
              <List name="Employers" data={employers} Card={Card4}/>
            </Route>

            <Route path="/jobs">
              <List name="Jobs" data={jobs} Card={Card5}/>
            </Route>

            <Route path="/selector">
              <Selector employers={employers} users={users}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
