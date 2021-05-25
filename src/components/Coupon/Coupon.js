import React, {Component} from 'react';
import axios from 'axios';
import './Coupon.css';

// const url = 'https://dev.remotereq.com';
const url = 'http://localhost:3030';

class Coupon extends Component {
  constructor(props){
    super(props);

    this.state = {
      discountType: '',
      appliesToAccessFee: false,
      appliesToHireFee: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitCoupon = this.submitCoupon.bind(this);
    this.toggleAppliesTo = this.toggleAppliesTo.bind(this);
  }

  componentDidMount() {
    axios.get(`${url}/api/admin/latestCoupon`)
    .then(response => {
      console.log(response);

      const latestCoupon = response.data[0];

      this.setState({
        ...this.state,
        currentCoupon: {
          code: latestCoupon.code || '',
          amount: latestCoupon.amount || '',
          discountType: latestCoupon.discountType || '',
          appliesToAccessFee: latestCoupon.appliesToAccessFee || false,
          appliesToHireFee: latestCoupon.appliesToHireFee || false,
        }
      }, () => {
        console.log(this.state);
      })
    })
  }

  submitCoupon(e) {
    e.preventDefault();
    const { code, amount, discountType, appliesToAccessFee, appliesToHireFee } = this.state || '';

    const coupon = {
      code,
      amount,
      discountType,
      appliesToAccessFee,
      appliesToHireFee,
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

  toggleAppliesTo(e) {
    console.log('click')

    this.setState({
      [e.target.name]: !this.state[e.target.name],
    }, () => {
      console.log(this.state)
    })
  }

  // deletePromoCode(){
  //   axios
  // }

  render() {
    const { discountType } = this.state;
    const { currentCoupon } = this.state;
    const { appliesToAccessFee, appliesToHireFee }= this.state;

    return (
      <div>
        {
          currentCoupon ? 
      
          <div className="list coupon">
            <h1>Generate Promo Code</h1>

            <h2>Current Promo Code</h2>

            <h3>Code: </h3>
            <input 
              readOnly
              defaultValue={currentCoupon.code}
              style={{backgroundColor: 'lightGray', border: 'none', outline: 'none'}}
            />

            <h3>Discount: {currentCoupon.discountType}</h3>
            <input 
              readOnly
              defaultValue={currentCoupon.amount}
              style={{backgroundColor: 'lightGray', border: 'none', outline: 'none'}}
            />

            <h3>Applies To: </h3>
            {
              currentCoupon.appliesToAccessFee ? <p>Access Fee</p> : ''
            }

            {
              currentCoupon.appliesToHireFee ? <p>Hire Fee</p> : ''
            }

            <h3>Create new Promo Code</h3>
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

              <div>
                <p>Applies to:</p>
                
                <label>
                  <input 
                    type="checkbox"
                    name="appliesToAccessFee"
                    checked={appliesToAccessFee}
                    onChange={this.toggleAppliesTo}
                    />
                  &nbsp; Access Fee
                </label>

                <label>
                  <input 
                    type="checkbox"
                    name="appliesToHireFee"
                    checked={appliesToHireFee}
                    onChange={this.toggleAppliesTo}
                    style={{
                      marginLeft: '20px'
                    }}
                    />
                  &nbsp; Hire Fee
                </label>
              </div>

              <br/>

              <button
                onClick={this.submitCoupon}
                >
                Create
              </button>
            </div>

        :

            <div>
              loading ...
            </div>
      }

      </div>
    )
  }
}

export default Coupon;