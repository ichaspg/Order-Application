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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const backButton = () => {
    navigate('/checkout')
  }
  const [selectedMethod,setSelectedMethod] = useState()

  const handleSelected = (val) => {
    setSelectedMethod(val)
    dispatch(orderActions.addpaymentMethod(selectedMethod))
    dispatch(orderActions.checkOutStatus())
    dispatch(orderActions.payStatus(false))
    axios.post('http://localhost:8000/user')
    navigate(`/${val}`)
  }

  
  return (
    <div className='payment-cont'>
        <div className="payment-head">
            <img src={BackIcon} alt="back" className='back-btn' onClick={()=> backButton()}/>
            <p className="payment-title">Checkout</p>
        </div>
        <div className="method-cont">
          <div className="method-list">
            <div className='bank-btn' onClick={()=> handleSelected('bcatransferpayment')}>
              <img src={bca} alt="" className='method-img' />
              <p className="method-name">Bank Transfer </p>
              <img src={arrow} alt="" className='arrow' />
            </div>
          </div>
          <div className="method-list">
            <div className='qris-btn' onClick={()=> handleSelected('qrispayment')}>
              <img src={qris} alt="" className='method-img' />
              <p className="method-name">QRIS </p>
              <img src={arrow} alt="" className='arrow'/>
            </div>
          </div>
          <div className="method-list" onClick={()=> handleSelected('cashpayment')}>
            <div className='cash-btn'>
              <img src={cash} alt="" className='method-img' />
              <p className="method-name">Cash Payment </p>
              <img src={arrow} alt="" className='arrow'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Payment