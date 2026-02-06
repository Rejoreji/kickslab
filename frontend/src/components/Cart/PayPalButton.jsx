import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}) => {
  return  <PayPalScriptProvider options={{ "client-id": "Ae6Vuo4-maCXsGc8jRSxbBIFObtMGTs2kPBZvq5HEOoBXL0HE23e68JV3_hX9GzK3T7G_vNG0SsvrrAf" }}>

    <PayPalButtons style={{layout:"vertical"}}
    createOrder={(data,actions) => {
        return actions.order.create({
            purchase_units: [{amount:{value:amount}}]
        })
    }}
    onApprove={(data, actions)=>{
        return actions.order.capture().then(onSuccess)}}
        onError = {onError} >

        </PayPalButtons>
    </PayPalScriptProvider>
}

export default PayPalButton
