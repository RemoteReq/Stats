import React, { Component } from 'react';
import { Card1, SelectorCard, CouponCard } from "../../components/Card/Card.js";
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const { subscribers } = this.props;
    const { demoRequests } = this.props;
    const { users } = this.props;
    const { employers } = this.props;
    const { jobs } = this.props;

    return (
      <div className="dashboard">
        <h1>RemoteReq Stats Dashboard</h1>
        {
          subscribers && demoRequests ? 

          <div>
            <Card1 name='Subscribers'
                   data={subscribers}
                   path="/subscribers"
            />
            <Card1 name='Demo Requests'
                   data={demoRequests}
                   path="/demos"
            />
            <Card1 name='Users'
                   data={users}
                   path="/users"
            />
            <Card1 name='Employers'
                   data={employers}
                   path="/employers"
            />
            <Card1 name='Jobs'
                   data={jobs}
                   path="/jobs"
            />
            <SelectorCard
              path="/selector"
            />
            <CouponCard
              path="/coupon"
            />
          </div>
          
          :

          <div>loading</div>
        }
      </div>
    )
  }
}

export default Dashboard;