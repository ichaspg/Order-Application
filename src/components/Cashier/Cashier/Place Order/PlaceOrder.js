import React, { useState } from 'react'
import './placeorder.css'

const PlaceOrder = ({cartItems,handleCancel}) => {
  const [name,setName] = useState(''); 
  const [tableNumber,setTableNumber] = useState(''); 
  const [orderType,setOrderType] = useState(''); 
  const handleSubmit = () => {

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
                placeholder='Name'
                onChange={(e) => setTableNumber(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="name">Order Type</label>
                <input 
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                 />
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