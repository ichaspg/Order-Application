import './popup.css'
import bank from '../../../assets/BCA.png'
import gopay from '../../../assets/gopay.png'
import qris from '../../../assets/qris.png'
import cash from '../../../assets/cash.png'
import qr from '../../../assets/qrcode.png'

const Popup = (props) => {
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
              <button className='done-btn'>Done</button>
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
              <button className='done-btn'>Done</button>
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
                <button className='done-btn'>Done</button>
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
              <button className='done-btn'>Done</button>
            </div>
          </div>
        </div>
        )
    default: return null;
  }
}

export default Popup