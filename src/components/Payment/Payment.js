import React, { useState } from 'react'
import BackIcon from '../../assets/bx-arrow-back.svg'
import arrow from '../../assets/arrow-right.png'
import './payment.css'
import bca from '../../assets/BCA.png'
import qris from '../../assets/qris.png'
import cash from '../../assets/cash.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { orderActions } from '../../store/orderSlice'
import axios from 'axios'


const Payment = () => {
  const userInfo = useSelector((state) => state.order.user)
  const checkOut = useSelector((state) => state.order.checkOut)
  const orderDetail = useSelector((state) => state.order.orderDetail)
  const orderType = useSelector((state) => state.order.orderType)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const backButton = () => {
    navigate('/checkout')
  }
  const [selectedMethod,setSelectedMethod] = useState()

  const handleSelected = (val) => {
    setSelectedMethod(val)
    dispatch(orderActions.addpaymentMethod(selectedMethod))
    dispatch(orderActions.checkOutStatus(true))
    dispatch(orderActions.payStatus(false))
    dispatch(orderActions.userInfo({
      ...userInfo,
      order: orderDetail,
      paymentMethod: val,
      checkOut: checkOut,
      orderType:orderType,
      status: 'Waiting for Payment'
    }))
  }

  const proceedButtonClicked = () => {
    console.log(userInfo)
    localStorage.setItem('user', JSON.stringify(userInfo))

    axios.post('http://localhost:5000/api/order',{
      userId: userInfo._id,
      userName:userInfo.name,
      tablenumber:userInfo.tablenumber,
      method:selectedMethod,
      order:orderDetail,
      subtotal:orderDetail.subtotal,
      total:orderDetail.totalAllPrice,
      status: userInfo.status,
      orderType: userInfo.orderType,
      paymentPic:'Picture',
    }).then((response) => {
      console.log(response.status)
      console.log(response.data)
    })

    if (selectedMethod === 'BCA Transfer') {
      navigate('/bcatransferpayment')
    }if (selectedMethod === 'QRIS') {
      navigate('/qrispayment')
    }if (selectedMethod === 'Cash Payment') {
      navigate('/cashpayment')
    }
  }

  
  return (
    <div className='payment-cont'>
        <div className="payment-head">
            <img src={BackIcon} alt="back" className='back-btn' onClick={()=> backButton()}/>
            <p className="payment-title">Checkout</p>
        </div>
        <div className="method-cont">
          <button className='method-btn' onClick={() => handleSelected('BCA Transfer')}>
            <img src={bca} alt="" className='method-img' />
            <p>Bank Transfer</p>
          </button>
          <button className='method-btn' onClick={() => handleSelected('QRIS')}>
            <img src={qris} alt="" className='method-img'/>
            <p>QRIS Payment</p>
          </button>
          <button className='method-btn' onClick={() => handleSelected('Cash Payment')}>
            <img src={cash} alt="" className='method-img' />
            <p>Cash Payment</p>
          </button>
        </div>
      <button className='proceed-pay-btn' onClick={() => proceedButtonClicked()}>Proceed Payment</button>
    </div>
  )
}

export default Payment