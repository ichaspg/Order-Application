import React, { useState } from 'react'
import { useEffect } from 'react'
import useFetch from '../../../useFetch'
import Sidebar from '../Sidebar/Sidebar'
import DeleteModal from './Delete Popup/DeleteModal'
import './home.css'
import PaymentModal from './Payment Popup/PaymentModal'

const Home = () => {
  const {data,isLoading,error} = useFetch('http://localhost:5000/api/order')
  const [selectedOrder,setSelectedOrder] = useState();
  const [deleteBtn,setDeleteBtn] = useState(false);
  const [paymentBtn,setPaymentBtn] = useState(false);
  const [order,setOrder] = useState(data)
  useEffect(() => {
    setOrder(data)
  },[data])
  const handleClick = (i) => {
    setSelectedOrder(order[i])
    console.log(selectedOrder)
  }
  const deleteOrderBtn = (i) => {
    console.log(order[i])
    setDeleteBtn(true)
  }

  const checkPaymentBtn = (i) => {
    setPaymentBtn(true)
  }
  return (
    <>
    <div className="cashier-cont2">
      <Sidebar/>
      {paymentBtn && <PaymentModal order={selectedOrder} handleCancel={value => setPaymentBtn(value)} />}
      {deleteBtn && <DeleteModal order={selectedOrder} handleCancel={value => setDeleteBtn(value)} />}
      <div className="home-cont">
          <div className="order-list-admin">
          <h1 className='home-ttl'>Order List</h1>
            <div className="order-card-list">
            {order.map((item,index) => (
              <div className="order-card" key={item._id} onClick={()=> handleClick(index)}>
              <div className="table-type">
                <p className="order-table">Table {item.tablenumber}</p>
                <p>{`${item.orderType}`}</p>
              </div>
                <div className="order-detail-sm">
                  <p className="order-receiver">Recepient : {item.userName}</p>
                  <p className="order-id">Order ID : {item._id}</p>
                </div>
                {item.status === 'Waiting for Payment' && <p className="order-status-wait">{item.status}</p>}
                {item.status === 'Checking Payment' && <p className="order-status-check">{item.status}</p>}
                {item.status === 'Paid' && <p className="order-status-paid">{item.status}</p>}
              </div>
            ))}
          </div>
        </div>
          <div className="detail-cont">
            <h1>Current Order</h1>
            {selectedOrder && 
            <div className='order-detail' key={selectedOrder._id}>
              <div className="detail-header-lg">
              <div className="table-type">
                <p className="order-table">Table {selectedOrder.tablenumber}</p>
                <p>{selectedOrder.orderType}</p>
              </div>
                <div className="order-detail">
                  <p className="order-receiver">Recipent : {selectedOrder.userName}</p>
                  <p className="order-id">Order ID : {selectedOrder._id}</p>
                </div>
              </div>
              <div className="selected-order">
                {selectedOrder.order.item.map((item)=> (
                  <div className="order-detail-list" key={item._id}>
                    <img src={item.image} alt="" className='order-img'/>
                    <div className="product-detail">
                      <p className="item-name">{item.name} <span>x{item.quantity}</span></p>
                      <p className="item-price">Rp.{item.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="current-btn-cont">
              <button className='check-btn' onClick={()=> checkPaymentBtn(selectedOrder._id)}>Check Payment</button>
              <button className='delete-order-btn' onClick={() => deleteOrderBtn(selectedOrder._id)}>Delete Order</button>
              </div>
              <div className="price-detail-cashier">
                <div className="subtotal-detail">
                  <p>Subtotal</p>
                  <p>Rp.{selectedOrder.subtotal}</p>
                </div>
                <div className="tax-detail">
                  <p>Tax (10%)</p>
                  <p>Rp.{selectedOrder.subtotal * 0.1}</p>
                </div>
                <div className="total-detail">
                  <p>Total</p>
                  <p>Rp.{selectedOrder.total}</p>
                </div>
              </div>
              <button className='complete-btn'>Complete Transaction</button>
            </div>
            }
          </div>
      </div>
    </div>
    </>
  )
}

export default Home