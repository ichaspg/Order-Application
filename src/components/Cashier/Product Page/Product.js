import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './product.css'
import allicon from '../../../assets/allicon.svg'
import signatureicon from '../../../assets/signature-icon.svg'
import coffeeicon from '../../../assets/coffee-icon.svg'
import brewicon from '../../../assets/brew-icon.svg'
import milkicon from '../../../assets/milk-icon.svg'
import refreshicon from '../../../assets/refresh-icon.svg'
import teaicon from '../../../assets/tea-icon.svg'
import courseicon from '../../../assets/food-icon.svg'
import snackicon from '../../../assets/snacks-icon.svg'
import useFetch from '../../../useFetch'
import AddProduct from './Add Product/AddProduct'
import EditProduct from './Edit Product/EditProduct'
import DeleteProduct from './Delete Product/DeleteProduct'

const Product = () => {
  //================Fetch Data dari Database=================================
  const {data:foods,isLoading,error} =useFetch('http://localhost:5000/api/foods')
  const [data,setData] = useState(foods)
  useEffect(()=>{
    setData(foods)
  },[foods])
  //======================Category FIlter======================================
  const categoryFilter = (categoryItem) => {
    const result = foods.filter((filteredFoods) => {
      return filteredFoods.category === categoryItem
    })
  setData(result)
  }
  //======================Searchbar===========================================
  const [filter,setFilter] = useState('')
  const searchText = (e) => {
    setFilter(e.target.value)
  }
  let dataSearch = data.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })
  //==========================Add Menu==========================================
  const [addMenu,setAddMenu] = useState(false)
  const addMenuClicked = () => {
    setAddMenu(true)
  }
  //========================Delete Menu========================================
  const [deleteMenu,setDeleteMenu] = useState(false)
  const deleteMenuClicked = (i) => {
    setDeleteMenu(true)
    setSelectedProduct(foods[i])
  }
  //===========================Edit Menu=======================================
  const [editMenu,setEditMenu] = useState(false)
  const [selecetedProduct,setSelectedProduct] = useState()
  const editMenuClicked = (i) => {
    setEditMenu(true)
    setSelectedProduct(foods[i])
  }
  return (
    <>
    <div className="cashier-cont">
      {deleteMenu && <DeleteProduct product={selecetedProduct} handleCancel={value => setDeleteMenu(value)}/>}
      {addMenu && <AddProduct handleCancel={value => setAddMenu(value)}/>}
      {editMenu && <EditProduct product={selecetedProduct} handleCancel={value => setEditMenu(value)}/>}
      <Sidebar/>
      <div className="product-page-cont">
        <div className="product-page-header">
          <h1>Product List</h1>
          <div className="search-bar-product">
            <input 
            type="text" 
            value={filter}
            placeholder='Search Product'
            onChange={searchText.bind(this)}
             />
          </div>
        </div>
        <div className="product-page-category-cont">
          <div className="category-item">
            <button className='category-btn-big' onClick={() => setData(foods)}>
              <img src={allicon} alt="" /> All
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Signature')}>
              <img src={signatureicon} alt="" /> Signature
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Coffee')}>
              <img src={coffeeicon} alt="" /> Coffee
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Manual Brew')}>
              <img src={brewicon} alt="" /> Manual Brew
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Milk Base')}>
              <img src={milkicon} alt="" /> Milkbase
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Refreshment')}>
              <img src={refreshicon} alt="" /> Refreshment
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Tea')}>
              <img src={teaicon} alt="" /> Tea
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Main Course')}>
              <img src={courseicon} alt="" /> Main Course
            </button>
          </div>
          <div className="category-item">
            <button className='category-btn-big' onClick={() => categoryFilter('Snack')}>
              <img src={snackicon} alt="" /> Snacks
            </button>
          </div>
        </div>
        <button className='add-product-btn' onClick={() => addMenuClicked()}>Add New Menu</button>
        <div className="product-page-list-cont">
          {dataSearch.map((item,index) => (
            <div className="product-page-item" key={item._id}>
              <div className="product-info-lg">
                <img src={item.image} alt="" className="product-img-lg" />
                  <div className="product-detail-lg">
                    <p className="product-name-lg">{item.name}</p>
                    <p className="product-desc-lg">{item.description}</p>
                    <p className="product-price-lg">Rp.{item.price}</p>
                  </div>
              </div>
              <div className="button-cont">
                <button className='delete-btn' onClick={() => deleteMenuClicked(index)}>Delete</button>
                <button className="edit-btn" onClick={() => editMenuClicked(index)}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Product