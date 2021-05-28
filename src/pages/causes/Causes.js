import React, {Component} from 'react';
import axios from 'axios';

import './Cause.css';

const url = "http://localhost:3030"

const CauseForm = ({handleChange, addCause}) => {
  return (
    <div className="cause-form">
      <h3>Add Cause</h3>

      <div className="submitter">
        <input 
          name="cause"
          onChange={handleChange}
          />
        <button
          onClick={addCause}
          >Add</button>
        </div>
    </div>
  )
}

const Cause = ({cause, removeCause}) => {
  return (
    <button
      value={cause.label}
      onClick={removeCause}
    >
      {cause.label}
    </button>
  )
}

class Causes extends Component{
  constructor(props){
    super(props);

    this.state = {
      cause: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCause = this.addCause.bind(this);
    this.removeCause = this.removeCause.bind(this);
  }

  componentDidMount() {
    axios.get(`${url}/api/admin/causes`)
    .then((response) => {
      console.log(response);
      
      this.setState({
        causes: response.data,
      })
    })
    .catch((error) => {
      console.log('no response \n', error);
    })
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      console.log(this.state);
    });
  }

  addCause(e) {
    e.preventDefault();

    const cause = {
      cause: this.state.cause,
    }

    axios.post(`${url}/api/admin/causes`, cause)
    .then((response) => {
      console.log(response);
    })
  }

  removeCause(e) {
    e.preventDefault();

    const cause = {
      cause: e.target.value
    }

    console.log('target cause to remove', e.target.value)

    axios.post(`${url}/api/admin/remove-cause`, cause)
    .then((response) => {
      console.log(response)
    })
  }

  render() {
    const {causes} = this.state;

    if (causes) {
        return (
          <div>
            <div className="list">
              <h1>Causes</h1>
              <CauseForm 
                handleChange={this.handleChange}
                addCause={this.addCause}
              />


              <h3>Current Causes in Database (click to remove)</h3>
              {
                causes.map((cause, i) => {
                  return(
                    <Cause 
                      cause={cause} 
                      key={i}
                      removeCause={this.removeCause}
                    />
                  )
                })
              }
            </div>
        </div>
      )
    }

    return (
      <div>
        loading...
      </div>
    )
  }
}

export default Causes;