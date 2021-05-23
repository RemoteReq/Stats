import React, {Component} from 'react';
import axios from 'axios';

// const url = 'https://dev.remotereq.com';
const url = 'http://localhost:3030';

class Coupon extends Component {
  constructor(props){
    super(props);

    this.state = {
      discountType: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitCoupon = this.submitCoupon.bind(this);
  }

  componentDidMount() {
    axios.get(`${url}/api/admin/latestCoupon`)
    .then(response => {
      console.log(response);

      const latestCoupon = response.data[0];

      this.setState({
        latestCode: latestCoupon.code,
        latestAmount: latestCoupon.amount,
        latestDiscountType: latestCoupon.discountType,
      })
    })
  }

  submitCoupon(e) {
    e.preventDefault();
    const { code, amount, discountType } = this.state || '';

    const coupon = {
      code,
      amount,
      discountType,
    }

    this.setState({
      code: '',
      amount: '',
      discountType: '',
    });

    axios.post(`${url}/api/admin/coupon`, coupon)
    .then(response => {
      console.log(response);
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      console.log(this.state)
    })
  }

  toggleDiscountType() {

  }

  render() {
    const { discountType } = this.state;
    const { latestCode, latestAmount, latestDiscountType } = this.state || '';

    return (
      <div className="list">

        <h1>Generate Coupon</h1>

        <h2>Current Coupon</h2>

        <h3>Code: </h3>
        <input 
          readOnly
          defaultValue={latestCode}
          style={{backgroundColor: 'lightGray', border: 'none', outline: 'none'}}
        />

        <h3>Discount: {latestDiscountType}</h3>
        <input 
          readOnly
          defaultValue={latestAmount}
          style={{backgroundColor: 'lightGray', border: 'none', outline: 'none'}}
        />

        <h3>Create new coupon</h3>
          <input
            placeholder="Code"
            name="code"
            onChange={this.handleChange}
            />

          <input
            placeholder="Discount"
            name="amount"
            onChange={this.handleChange}
          />

          <div>
            <p>Discount Type</p>

            <label>
              <input
                type="radio"
                name="discountType"
                value="flat"
                checked={discountType === "flat"}
                onChange={this.handleChange}
                />
              &nbsp; Flat
            </label>          

            <label>
              <input
                type="radio"
                name="discountType"
                value="percentage"
                checked={discountType === "percentage"}
                onChange={this.handleChange}
                style={{
                  marginLeft: '20px'
                }}
                />
                &nbsp; Percentage
              </label>
          </div>

          {/* <div>
            <p>Payment Gateway</p>

            <label>
              <input 
                type="checkbox"
              />
              &nbsp; First
            </label>

            <label>
              <input 
                type="checkbox"
                style={{
                  marginLeft: '20px'
                }}
              />
              &nbsp; Second
            </label>
          </div> */}

          <br/>

          <button
            onClick={this.submitCoupon}
            >
            Create
          </button>
      </div>
    )
  }
}

export default Coupon;