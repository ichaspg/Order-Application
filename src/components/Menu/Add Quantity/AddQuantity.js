import React from 'react'

const AddQuantity = () => {
  return (
    <div className="quantity">
      <button className='quant-btn' onClick={()=>incrementCartItem(index)}>+</button>
      <p className='order-quant'>{item.quantity}</p>
      <button className='quant-btn' onClick={() => decrementCartItem(index)} >-</button>
    </div> 
  )
}

export default AddQuantity