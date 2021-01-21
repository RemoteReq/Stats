import React, {Component} from 'react';

class Coupon extends Component {

  render() {
    return (
      <div className="list">

        <h1>Generate Coupon</h1>

        <h2>Current Coupon</h2>

        <h3>Code:</h3>

        <h3>Discount:</h3>

        <input
          placeholder="Code"
        />

        <input
          placeholder="Discount"
        />

        <button>
          Generate
        </button>
      </div>
    )
  }
}

export default Coupon;