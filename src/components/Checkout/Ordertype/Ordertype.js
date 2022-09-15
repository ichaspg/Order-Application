import React, { useEffect } from 'react'
import takeawayicon from '../../../assets/takeaway.svg'
import dineinicon from '../../../assets/dinein.svg'
import './ordertype.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { orderActions } from '../../../store/orderSlice'
import { useState } from 'react'



const Ordertype = ({cartItems,handleClose}) => {
  const userInfo = useSelector((state) => state.order.user)
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [userData, setUserData] = useState();



  const handleClick = (type) => {
    dispacth(orderActions.addOrderType(type))
    dispacth(orderActions.userInfo({
      ...userInfo,
      orderType: type,
    }))
    console.log(userInfo)
    localStorage.setItem('user',JSON.stringify(userInfo))
    navigate('/payment')
  }
 
  return (
    <div className='ordertype-cont'>
      <div className="ordertype-form">
      <p className="close-btn" onClick={()=>handleClose(false)}>X</p>
        <h1>Order Type</h1>
        <div className="ordertype-btn-cont">
          <button className='ordertype-btn' onClick={() => handleClick('Dine In')}>
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