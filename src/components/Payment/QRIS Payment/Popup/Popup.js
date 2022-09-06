import React from 'react'
import qrisicon from '../../../../assets/qris.png'
import qrcode from '../../../../assets/qrcode.png'
import './popup.css'

const Popup = ({popup,handleCancel}) => {
  return (
  <div className="overlay">
    <div className="item-cont">
      <img src={qrisicon} alt="" className='bank-img' />
      <img src={qrcode} alt="" className='qr-img'/>
      <p className='place-name'>KONA GELATO</p>
      <p className="desc">
      <span>Lakukan screenshot pada kode QR diatas <br /></span>
      Simpan bukti pembayaran lalu upload bukti pembayaran
      </p>
      <div className="button-cont">
        <button className='cancel-btn' onClick={() => handleCancel(false)}>Cancel</button>
        <button className='done-btn' onClick={() => handleCancel(false)}>Done</button>
      </div>
    </div>
  </div>
  )
}

export default Popup