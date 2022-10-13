import React, { useEffect } from 'react'
import takeawayicon from '../../../assets/takeaway.svg'
import dineinicon from '../../../assets/dinein.svg'
import './ordertype.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { orderActions } from '../../../store/orderSlice'




const Ordertype = ({cartItems,handleClose}) => {
  const userInfo = useSelector((state) => state.order.user)
  const orderInfo = useSelector((state) => state.order.orderDetail)
  const navigate = useNavigate();
  const dispacth = useDispatch();
  console.log(userInfo)


  const handleClick = (type) => {
    dispacth(orderActions.addOrderType(type))
    dispacth(orderActions.userInfo({
      ...userInfo,
      order:orderInfo,
      orderType: type,
    }))
  }

  const confirmButtonClicked = () => {
    localStorage.setItem('user',JSON.stringify(userInfo))
    console.log(userInfo)
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
          <button className="confirm-btn" onClick={()=> confirmButtonClicked()}>Confirm</button>
      </div>
    </div>
  )
}

export default Ordertype