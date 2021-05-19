import e from 'express';
import React, {Component} from 'react';

class Coupon extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentCode: '',
      currentDiscount: '',
      discountAmount: 0,

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="list">

        <h1>Generate Coupon</h1>

        <h2>Current Coupon</h2>

        <h3>Code:</h3>

        <h3>Discount:</h3>

        <input
          placeholder="Code"
          name="currentCode"
          onChange={this.handleChange}
        />

        <input
          type="checkbox"
          name="flat"
        />

        <input
          type="checkbox"
          name="percentage"
        />


        <input
          placeholder="Discount"
          name="currentDiscount"
          onChange={this.handleChange}
        />

        <button>
          Generate
        </button>
      </div>
    )
  }
}

export default Coupon;