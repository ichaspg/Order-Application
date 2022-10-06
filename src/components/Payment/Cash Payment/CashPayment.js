import React from 'react'
import './cashpayment.css'
import cashicon from '../../../assets/cash.png'
import { useSelector } from 'react-redux'

const CashPayment = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='paymentdetail-cont'>
      <div className="payment-header">
        <img src={cashicon} alt="" className='payment-header-img-cash' />
        <p className="payment-header-ttl">Cash Payment</p>
      </div>
      <div className="paymentdetail-amount">
        <p className="total-payment-ttl">Total Pembayaran</p>
        <p className="total-payment-amount">Rp.{user.order.totalAllPrice}</p>
        <p className="payment-instruction">Bayar pesanan sesuai jumlah diatas </p>
        <p className="payment-desc">Segera  lakukan pembayaran anda dikasir setelah melakukan checkout.Jika dalam waktu 15 menit tidak dilakuakn pembayaran, maka order dianggap batal dan anda akan dikembalikan ke menu utama</p>
      </div>
    </div>
  )
}

export default CashPayment