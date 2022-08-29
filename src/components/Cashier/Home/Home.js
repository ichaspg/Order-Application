import React, { useState } from 'react'
import useFetch from '../../../useFetch'
import Sidebar from '../Sidebar/Sidebar'
import './home.css'

const Home = () => {
  const {data : order,isLoading,error} = useFetch('http://localhost:8000/order')
  const [selectedOrder,setSelectedOrder] = useState()
  console.log(selectedOrder)
  const handleClick = (i) => {
    setSelectedOrder(order[i])
  }
  return (
    <>
      <Sidebar/>
      <div className="home-cont">
          <div className="order-list">
          <h1 className='home-ttl'>Order List</h1>
          {order.map((item,index) => (
            <div className="order-card" key={item.id} onClick={()=> handleClick(index)}>
              <p className="order-table">Table {item.tablenumber}</p>
              <div className="order-detail">
                <p className="order-receiver">Recepient : {item.userName}</p>
                <p className="order-id">Order ID : {item.id}</p>
              </div>
              <p className="order-status">Preparing</p>
            </div>
          ))}
        </div>
          <div className="detail-cont">
            <h1>Current Order</h1>
            {selectedOrder && 
            <div className='order-detail'>
              <div className="detail-header">
                <p className="order-table">Table {selectedOrder.tablenumber}</p>
                <div className="order-detail">
                  <p className="order-receiver">Recipent : {selectedOrder.userName}</p>
                  <p className="order-id">Order ID : {selectedOrder.id}</p>
                </div>
              </div>
              {selectedOrder.order.map((item)=> (
                <div className="order-detail-list" key={item.id}>
                  <img src={item.image} alt="" className='order-img'/>
                  <div className="product-detail">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">{item.totalPrice}</p>
                  </div>
                  <p className="item-quantity">Qty : {item.quantity}</p>
                </div>
              ))}
            </div>
            }
          </div>
      </div>
    </>
  )
}

export default Home