import React from 'react'
import './transferpayment.css'
import bcaicon from '../../../assets/BCA.png'
import { useSelector } from 'react-redux'

const TransferPayment = () => {
  const totalPrice = useSelector((state) => state.cart.totalAllPrice)
  return (
    <div className='paymentdetail-cont'>
      <div className="payment-header">
        <img src={bcaicon} alt="" className='payment-header-img' />
        <p className="payment-header-ttl">BCA <br /> <span>Bank Transfer</span></p>
      </div>
      <div className="paymentdetail-amount">
        <p className="total-payment-ttl">Total Pembayaran</p>
        <p className="total-payment-amount">Rp.{totalPrice}</p>
        <p className="payment-instruction">Bayar pesanan sesuai jumlah diatas </p>
        <p className="payment-desc">Segera  lakukan pembayaran anda setelah melakukan checkout.Jika dalam waktu 15 menit bukti transfer belum diunggah, maka order dianggap batal dan anda akan dikembalikan ke menu utama</p>
      </div>
      <div className="payment-step-cont">
        <p className="payment-step-ttl">Cara Pembayaran</p>
        <p className='payment-step'>1.Gunakan ATM/ iBanking / mBanking untuk melakukan transfer ke rekening berikut ini:</p>
        <div className="bank-detail">
          <p>BCA:</p>
          <p>No.Rekening : <span>777-27893133</span></p>
          <p>Nama Rekening : <span>KONA GELATO</span></p>
        </div>
        <p className="payment-step">2.Silahkan upload bukti pembayaran dalam 15 menit <br />
        3.Demi kemanan transaksi dimohon untuk tidak memberikan bukti transfer kepada siapapun,selain mengupload via website KONA</p>
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

export default TransferPayment