import React, { useState } from 'react'
import takeawayicon from '../../../assets/takeaway.svg'
import dineinicon from '../../../assets/dinein.svg'
import './ordertype.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cartSlice'
import axios from 'axios'


const Ordertype = ({cartItems,handleClose}) => {
  const navigate = useNavigate();
  const [orderType,setOrderType] = useState('')
  const dispacth = useDispatch()

  const handleClick = (type) => {
    setOrderType(type)
    axios.put()
    navigate('/payment')
  }
  console.log(orderType)
  return (
    <div className='ordertype-cont'>
      <div className="ordertype-form">
      <p className="close-btn" onClick={()=>handleClose(false)}>X</p>
        <h1>Order Type</h1>
        <div className="ordertype-btn-cont" onClick={() => handleClick('Dine In')}>
          <button className='ordertype-btn'>
            <img src={dineinicon} alt="" className='ordertype-img'/>
            Dine In
          </button>
          <button className='ordertype-btn'onClick={() => handleClick('Take Away')}>
            <img src={takeawayicon} alt="" className='ordertype-img'/>
            Take Away
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ordertype