import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
import './cashier.css'
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
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/cartSlice'
import PlaceOrder from './Place Order/PlaceOrder'

const Cashier = () => {
  //===========Fetch data dari API==================================
  const {data:foods,isLoading,error} = useFetch('http://localhost:8000/foods')
  const [data,setData] = useState(foods)
  useEffect(()=>{
    setData(foods)
  },[foods])
  //=====================Slider Category==================================
  const categorySlider = useRef();
  const[width,setWidth] = useState(0)
  useEffect(()=> {
    setWidth(categorySlider.current.scrollWidth - categorySlider.current.offsetWidth)
  },[])
  //=======Filter Category======================================
  const categoryFilter = (categoryItem) => {
    const result = foods.filter((filteredFoods) => {
      return filteredFoods.category === categoryItem
    });
    setData(result)
  }

  //======================Searchbar========================================
  const [filter,setFilter] = useState('')
  const searchText = (e) => {
    setFilter(e.target.value)
  }
  let dataSearch = data.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })

  //=======================Redux Buat Order===================================
  const cartItems = useSelector((state) => state.cart.itemsList)
  const dispatch = useDispatch()
  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });
  const addToOrder = (i) => {
    dispatch(
      cartActions.addToCart({
        name: data[i].name,
        id:data[i].id,
        price:data[i].price,
        image:data[i].image
      })
    )
  }

  const incrementCartItem = (i) => {
    dispatch(cartActions.addToCart({
      id:cartItems[i].id,
      name:cartItems[i].name,
      price:cartItems[i].price,
      image:cartItems[i].image
    }))
  }
  const decrementCartItem = (i) => {
    dispatch(cartActions.removeFromCart(cartItems[i].id))
    }
  //===================Buat Button Place Order + Popup======================
  
  const [placeorder,setPlaceOrder] = useState(false)
  const handleClick = () => {
    setPlaceOrder(true)
  }

  return (
    <>
    <div className="cashier-cont">
      {placeorder && <PlaceOrder cartItems={cartItems} handleCancel={value => setPlaceOrder(value)} subtotal={total}/>}
      <Sidebar/>
      <div className="cashier-cont">
        <div className="product-cont">
          <h1>Choose Category</h1>
            <div className="category-cont-cashier">
              <motion.div ref={categorySlider} className='category-slider'>
                <motion.div 
                drag="x" 
                className='category-inner-carousel' 
                dragConstraints={{right:0,left: -width}}
                >
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => setData(foods)}>
                      <img src={allicon} alt="" /> All
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Signature')}>
                      <img src={signatureicon} alt="" /> Signature
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Coffee')}>
                      <img src={coffeeicon} alt="" /> Coffee
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Manual Brew')}>
                      <img src={brewicon} alt="" /> Manual Brew
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Milk Base')}>
                      <img src={milkicon} alt="" /> Milkbase
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Refreshment')}>
                      <img src={refreshicon} alt="" /> Refreshment
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Tea')}>
                      <img src={teaicon} alt="" /> Tea
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Main Course')}>
                      <img src={courseicon} alt="" /> Main Course
                    </button>
                  </motion.div>
                  <motion.div className='category-item'>
                    <button className='category-btn-big' onClick={() => categoryFilter('Snack')}>
                      <img src={snackicon} alt="" /> Snacks
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="searchbar-cashier">
              <input 
                type="text" 
                className='search-bar'
                value={filter}
                placeholder='Search Product'
                onChange={searchText.bind(this)}
                />
            </div>
            <div className="product-list">
              {dataSearch.map((item,index) => (
                <div className="product-item" key={item.id}>
                  <div className="product-detail-cashier">
                    <img src={item.image} alt="" className='product-img'/>
                      <div className="product-info">
                        <p className="product-name">{item.name}</p>
                        <p className="product-desc">{item.description}</p>
                        <p className="product-price">Rp.{item.price}</p>
                      </div>
                  </div>
                 {item.status === "Available" && <button className='add-order-btn' onClick={() => addToOrder(index)}>Add to Order</button>}
                 {item.status === "Out" && <p className='out-desc'>Out of Stock</p>}
                </div>
              ))}
            </div>
        </div>
        <div className="order-cart">
          <h1>Current Order</h1>
          <div className="order-cart-list">
            {cartItems.map((item,index) => (
              <div className="order-item-cashier" key={item.id}>
                <img src={item.image} alt="" className='order-item-img' />
                <div className="order-item-desc">
                  <p className='order-item-name'>{item.name}</p>
                  <p className="order-item-price">Rp.{item.price}</p>
                </div>
                <div className="quantity">
                  <button className='quant-btn' onClick={() => incrementCartItem(index)}>+</button>
                  <p>{item.quantity}</p>
                  <button className='quant-btn' onClick={() => decrementCartItem(index)}>-</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-cont">
            <div className="price-detail-cashier">
                <div className="subtotal-detail">
                  <p>Subtotal</p>
                  <p>Rp.{total}</p>
                </div>
                <div className="tax-detail">
                  <p>Tax (10%)</p>
                  <p>Rp.{total * 0.1}</p>
                </div>
                <div className="total-detail">
                  <p>Total</p>
                  <p>Rp.{total + (total * 0.1)}</p>
                </div>
              </div>
          </div>
          <button className='addorder-btn' onClick={() => handleClick()} disabled={!total}>Place Order</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cashier