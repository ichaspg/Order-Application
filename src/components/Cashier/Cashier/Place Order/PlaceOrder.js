import axios from 'axios';
import React, { useState } from 'react'
import './placeorder.css'

const PlaceOrder = ({cartItems,subtotal,handleCancel}) => {
  const [name,setName] = useState(''); 
  const [tableNumber,setTableNumber] = useState(''); 
  const [orderType,setOrderType] = useState(''); 
  const orderTypeButtonClicked = (type) => {
    setOrderType(type)
  }
  const handleSubmit = () => {
    axios.post('http://localhost:8000/order',{
      userName: name,
      tablenumber: tableNumber,
      order:cartItems,
      orderType: orderType,
      subtotal:subtotal,
      total:subtotal + (subtotal * 0.1),
      status:"Paid"
    })
    handleCancel(false)
    
  }
   return (
    <div className='place-cont'>
      <div className="placeorder-form-cont">
        <h1>Place Order</h1>
          <div className="placeorder-form">
            <form action="">
              <p>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="name">Table Number</label>
                <input 
                type="text"
                placeholder='Table Number'
                onChange={(e) => setTableNumber(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="name">Order Type</label>
                <div className="typebtn-cashier-cont">
                  <button className='typebtn-cashier' type='button' onClick={() => orderTypeButtonClicked("Take Away")}>Take Away</button>
                  <button className='typebtn-cashier' type='button' onClick={() => orderTypeButtonClicked("Dine In")}>Dine In</button>
                </div>
              </p>
            </form>
          </div>
          <div className="placeorder-btn-cont">
            <button className='placeorder-cancel' onClick={()=>handleCancel(false)}>Cancel</button>
            <input type="submit" value="Save" onClick={() => handleSubmit()} />
          </div>
      </div>
    </div>
  )
}

export default PlaceOrder