import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './editproduct.css'

const EditProduct = ({product,handleCancel}) => {
  const [productName,setProductName] = useState(product.name)
  const [productCategory,setProductCategory] = useState(product.category)
  const [productPrice,setProductPrice] = useState(product.price)
  const [productDesc,setProductDesc] = useState(product.description)
  const [status,setStatus] = useState(product.status)

  const statusButtonClicked = (stat) => {
    setStatus(stat)
  }
  const handleSubmit = (e) => {
    axios.put('http://localhost:8000/foods/' + product.id,{
      name:productName,
      category:productCategory,
      price:productPrice,
      description:productDesc,
      status:status,
      image:product.image
    }).then((response) => {
      console.log(response.status)
      console.log(response.data)
    })
    handleCancel(false)
  }
  return (
    <div className='popup-cont'>
      <div className="form-cont-lg">
      <p className='edit-title'>Edit Product Information</p>
        <div className="edit-image-cont">
          <img src={product.image} alt="" className='edit-prod-img'/>
          <button className='edit-img-btn'>Change Image</button>
        </div>
        <div className="edit-form">
          <form action="">
            <p>
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              placeholder='Item Name'
              value={productName} 
              onChange={(e) => setProductName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="category">Category</label>
              <input 
              type="text" 
              placeholder='Item Name'
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)} 
              />
            </p>
            <p>
              <label htmlFor="price">Price</label>
              <input 
              type="text" 
              placeholder='Item Name'
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
               />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <input 
              type="text" 
              placeholder='Item Name'
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
               />
            </p>
            <p>
              <label htmlFor="Status">{`Status : ${status}`}</label>
              <div className="status-btn-cont">
                <button className="available-btn" type='button' onClick={() => statusButtonClicked("Available")}>Available</button>
                <button className="out-btn" type='button' onClick={() => statusButtonClicked("Out")}>Out of Stock</button>
              </div>
            </p>
        </form>
        </div>
        <div className="edit-btn-cont">
          <input type="submit" value="Submit" onClick={()=>handleSubmit()}/>
          <button className='cancel-edit-btn' onClick={()=>handleCancel(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditProduct