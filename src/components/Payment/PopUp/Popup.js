import './popup.css'
import bank from '../../../assets/BCA.png'
import gopay from '../../../assets/gopay.png'
import qris from '../../../assets/qris.png'
import cash from '../../../assets/cash.png'
import qr from '../../../assets/qrcode.png'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Popup = (props) => {
  const cartItems = useSelector((state) => state.cart.itemsList)
  const userData = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  let subtotal = 0;
  cartItems.forEach((item) => {
    item ? subtotal += item.totalPrice : subtotal -= item.totalPrice;
  });
  const total = subtotal + (subtotal * 0.1)
  const handleSubmit = (method) => {
    axios.post('http://localhost:8000/order',{
      userId: 1,
      userName:userData.name,
      tablenumber:userData.tablenumber,
      method:method,
      order:cartItems,
      subtotal:subtotal,
      total:total
    }).then((response) => {
      console.log(response.status)
      console.log(response.data)
    })
    navigate('/menu')
  }
  switch (props.value) {
    case 0: //Cancel
      return (
        <div className=""></div>
      )
    case 1: //Transfer Payment
      return(
        <div className="overlay">
          <div className="item-cont">
            <img src={bank} alt="" className='bank-img' />
            <p className='no-rek'>22255177350</p>
            <p className='place-name'>KONA GELATO</p>
            <p className="desc">
            <span>Please save the payment receipt <br /></span>
            Show the payment receipt when your order arrive
            </p>
            <div className="button-cont">
              <button className='cancel-btn' onClick={() => props.handlecancel(0)}>Cancel</button>
              <button className='done-btn' onClick={() => handleSubmit('BCA Bank Transfer')}>Done</button>
            </div>
          </div>
        </div>
      )
    case 2: //Gopay Payment
      return(
       <div className="overlay">
          <div className="item-cont">
            <img src={gopay} alt="" className='bank-img' />
            <p className='no-rek'>22255177350</p>
            <p className='place-name'>KONA GELATO</p>
            <p className="desc">
            <span>Please save the payment receipt <br /></span>
            Show the payment receipt when your order arrive
            </p>
            <div className="button-cont">
              <button className='cancel-btn' onClick={() => props.handlecancel(0)}>Cancel</button>
              <button className='done-btn' onClick={() => handleSubmit('Gopay')}>Done</button>
            </div>
          </div>
        </div>
      )
      case 3: //QRIS Payment
        return(
          <div className="overlay">
            <div className="item-cont">
              <img src={qris} alt="" className='bank-img' />
              <img src={qr} alt="" className='qr-img'/>
              <p className='place-name'>KONA GELATO</p>
              <p className="desc">
              <span>Please save the payment receipt <br /></span>
              Show the payment receipt when your order arrive
              </p>
              <div className="button-cont">
                <button className='cancel-btn' onClick={() => props.handlecancel(0)}>Cancel</button>
                <button className='done-btn' onClick={() => handleSubmit('QRIS')}>Done</button>
              </div>
            </div>
          </div>
      )
      case 4: //Cash Payment
        return(
          <div className="overlay">
          <div className="item-cont">
            <img src={cash} alt="" className='bank-img' />
            <p className='place-name'>Cash Payment</p>
            <p className="desc">Please input your cash amount</p>
            <input type="number" pattern='[0-9]' className='cash-input' placeholder='Input Your cash amount'/>
            <div className="button-cont">
              <button className='cancel-btn' onClick={() => props.handlecancel(0)}>Cancel</button>
              <button className='done-btn' onClick={() => handleSubmit('Cash')}>Done</button>
            </div>
          </div>
        </div>
        )
    default: return null;
  }
}

export default Popup