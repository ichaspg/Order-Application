import React, { useState } from 'react'
import './qrispayment.css'
import qrisicon from '../../../assets/qris.png'
import { useSelector } from 'react-redux'
import Popup from './Popup/Popup'

const QrisPayment = () => {
  const totalPrice = useSelector((state) => state.cart.totalAllPrice)
  const user = JSON.parse(localStorage.getItem('user'))
  const cartItem = useSelector((state) => state.cart.itemsLists)
  const [popup,setPopup] = useState(false)
  const handleClick = (value) => {
    setPopup(value)
  }

  return (
    <div className='paymentdetail-cont'>
    {popup && <Popup popup={popup} handleCancel={value => handleClick(value)}/>}
      <div className="payment-header">
        <img src={qrisicon} alt="" className='payment-header-img' />
        <p className="payment-header-ttl">QRIS Payment</p>
      </div>
      <div className="paymentdetail-amount">
        <p className="total-payment-ttl">Total Pembayaran</p>
        <p className="total-payment-amount">Rp.{user.order.totalAllPrice}</p>
        <p className="payment-instruction">Bayar pesanan sesuai jumlah diatas </p>
        <p className="payment-desc">Segera  lakukan pembayaran anda setelah melakukan checkout.Jika dalam waktu 15 menit bukti transfer belum diunggah, maka order dianggap batal dan anda akan dikembalikan ke menu utama</p>
      </div>
      <div className="payment-step-cont">
        <p className="payment-step-ttl">Cara Pembayaran</p>
        <p className='payment-step'>1.Klik tombol “Bayar Sekarang” dibawah ini <br /> <br />
        2.Akan muncul jumlah yang harus dibayar ikuti langkah pembayaran lalu laman akan menampilkan kode <br /> <br />
        3.Screenshot kode QR tadi lalu selesaikan pembayaran menggunakan aplikasi mBanking,Gopay,OVO,Dana,Shopee Pay atau aplikasi pembayaran lain yang mendukung QRIS <br /> <br />
        4.Unggah bukit pembayaran dalam 15 menit <br /> <br />
        5.Demi kemanan transaksi dimohon untuk tidak memberikan bukti transfer kepada siapapun,selain mengupload via website KONA</p>
        <button className='popup-btn' onClick={() => handleClick(true)}>Bayar Sekarang</button>
      </div>
      <div className="upload-btn-cont">
        <div className="timer-cont">
          <p className='timer'>Selesaikan Dalam 15:00</p>
        </div>
        <div className="uploadbtn-cont">
          <button className='upload-btn'>Upload Bukti Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default QrisPayment