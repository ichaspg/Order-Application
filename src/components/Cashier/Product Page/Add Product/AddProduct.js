import axios from 'axios'
import React,{useState} from 'react'
import imageicon from '../../../../assets/image-icon.svg'
import './addproduct.css'

const AddProduct = ({handleCancel}) => {
  const [productName,setProductName] = useState('')
  const [productCategory,setProductCategory] = useState('')
  const [productPrice,setProductPrice] = useState('')
  const [productDesc,setProductDesc] = useState('')
  const handleSubmit = (e) => {
    axios.post('http://localhost:8000/foods',{
      name:productName,
      category:productCategory,
      price:productPrice,
      description:productDesc,
      image:''
    }).then((response) => {
      console.log(response.status)
      console.log(response.data)
    })
    handleCancel(false)
  }
  return (
    <div className='popup-cont'>
      <div className="form-cont-lg">
        <p className="add-title">Edit Product Information</p>
          <div className="add-img-cont">
            <img src={imageicon} alt="" className='add-prod-img' />
            <button className='add-img-btn'>Add Image</button>
          </div>
          <div className="add-form">
            <form action="">
              <p>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                placeholder='Item Name'
                onChange={(e) => setProductName(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="category">Category</label>
                <input 
                type="text"
                placeholder='Item Category'
                onChange={(e) => setProductCategory(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="price">Price</label>
                <input 
                type="text"
                placeholder='Item Price'
                onChange={(e) => setProductPrice(e.target.value)}
                 />
              </p>
              <p>
                <label htmlFor="description">Description</label>
                <input 
                type="text"
                placeholder='Item Description'
                onChange={(e) => setProductDesc(e.target.value)}
                 />
              </p>
            </form>
          </div>
          <div className="add-btn-cont">
            <input type="submit" value="Add Item" onClick={() => handleSubmit()} />
            <button className='cancel-add-btn' onClick={() => handleCancel(false)}>Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default AddProduct