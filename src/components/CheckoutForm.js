import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  
  async submit(ev) {
    // User clicked submit
    debugger
    let {token} = await this.props.stripe.createToken({name: "muhammad soban"});
   fetch("http://localhost:9000/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  }).then(data=>{
    return data.json()
  }).then(data=>{
    console.log(data)
  }).catch(err=>{
    console.log(err)
  });

 // console.log(response))
  // if (response.ok) {
  //   debugger 
  //   this.setState({complete: true});
  // console.log("Purchase Complete!") 
  // console.log(response.response)
  // console.log(response)
  // }

  // var url = "http://localhost:9000/charge"

  // fetch(url, {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   headers: {"Content-Type": "text/plain"},
  //   body: token.id, // body data type must match "Content-Type" header
  // }).then((response) => {
  //   debugger
  //   return response.json()
  // }).then((  ) => {
  //   debugger
  //   if (response.status === 200) {
  //     debugger 
  //     this.setState({complete: true});
  //   console.log("Purchase Complete!")
  //   console.log(response)
     
  //   }

  //   }).catch((error) => {
  //     debugger
  //     console.log('Error occured', error)
  //   })


  }
    // alert('Record has been insert successfully')
  

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    
    return (
      <div className="checkout" >
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);