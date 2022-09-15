import axios from 'axios'
import React from 'react'
import './deletemodal.css'

const DeleteProduct = ({order,handleCancel}) => {
  console.log(order.id)
  const handleDelete = () => {
    axios.delete('http://localhost:8000/order/' + order.id)
    .then((response) => {
      console.log(response.status)
      console.log(response.data)
    })
    handleCancel(false)
  }
  return (
    <div className='popup-cont'>
      <div className="delete-cont">
        <div className="delete-desc">
          <p className='delete-ttl'>Are you sure want to delete this menu?</p>
          <p className="delete-warning">This action can't be undo</p>
        </div>
        <div className="delete-btn-cont">
          <button className='delete-cancel-btn' onClick={() => handleCancel(false)}>Cancel</button>
          <button className='delete-btn-action' onClick={()=>handleDelete()}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct