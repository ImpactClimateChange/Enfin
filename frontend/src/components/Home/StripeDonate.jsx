import React, { Component } from 'react';

class StripeDonate extends Component {
  render() {
    return (
      <iframe 
        allowtransparency="true" 
        style="z-index: 2147483647; display: block; background: rgba(0, 0, 0, 0.004) none repeat scroll 0% 0%; border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;" 
        src="https://checkout.stripe.com/m/v3/index-3f0dc197837628f45156bf4f7ed0f6ad.html?distinct_id=02e8347f-aae1-2797-1fa5-d55863320041" 
        name="stripe_checkout_app" 
        className="stripe_checkout_app" 
        frameBorder="0" 
      />
    );
  }
}

export default StripeDonate;