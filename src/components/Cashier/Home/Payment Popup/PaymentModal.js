import axios from 'axios'
import React from 'react'
import './paymentmodal.css'

const PaymentModal = ({order,handleCancel}) => {
  console.log(order)

  const approveButtonClicked = () => {
    axios.put('http://localhost:8000/order/' + order.id,{
      ...order,
      status: "Paid"
    })
    handleCancel(false)
  }

  const declineButtonClicked = () => {

  }
  return (
    <div className="popup-cont">
      <div className='pay-modal-cont'>
        <p className="close-btn-sm" onClick={() => handleCancel(false)}>X</p>
        <img src={order.uploadPayment} alt="" className='payment-img' />
        <div className="check-payment-btn-cont">
          <button className='approve-btn' onClick={() => approveButtonClicked()}>Approve</button>
          <button className='decline-btn' onClick={() => declineButtonClicked()}>Decline</button>
        </div>  
      </div>
    </div>
  )
}

export default PaymentModal