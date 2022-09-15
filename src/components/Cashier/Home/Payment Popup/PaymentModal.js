import React from 'react'
import './paymentmodal.css'

const PaymentModal = ({order,handleCancel}) => {
  console.log(order)
  return (
    <div className="popup-cont">
      <div className='pay-modal-cont'>
        <p className="close-btn-sm" onClick={() => handleCancel(false)}>X</p>
        <img src={order.uploadPayment} alt="" className='payment-img' />
        <div className="check-payment-btn-cont">
          <button className='approve-btn'>Approve</button>
          <button className='decline-btn'>Decline</button>
        </div>  
      </div>
    </div>
  )
}

export default PaymentModal