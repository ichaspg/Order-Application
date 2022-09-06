import React, { useState } from 'react'
import BackIcon from '../../assets/bx-arrow-back.svg'
import './checkout.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
import Ordertype from './Ordertype/Ordertype'

const Checkout = () => {
    const navigate = useNavigate();
    const [ordertype,setOrderType] = useState(false)
    //=========REDUX==============
    let subtotal = 0;
    const cartItems = useSelector((state) => state.cart.itemsList)
    cartItems.forEach((item) => {
        item ? subtotal += item.totalPrice : subtotal -= item.totalPrice;
    });
    const dispatch = useDispatch()
    const handleClick = () => {
        let total = subtotal + (subtotal * 0.1)
        dispatch(cartActions.totalAllPrice(total))
        setOrderType(true)
    }
    const backButton = () => {
        navigate('/menu')
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

    return (
        <>
        <div className='checkout-cont'>
            {ordertype && <Ordertype cartItem={cartItems} handleClose={value => setOrderType(value)}/>}
            <div className="cont-head">
                <img src={BackIcon} alt="back" className='back-btn' onClick={()=> backButton()}/>
                <p className="checkout-title">Checkout</p>
            </div>
                <div className="summ-cont">
                    <p className="summ-ttl">Order Summary</p>
                    <div className="order-cont">
                        {cartItems.map((item,index) =>(
                            <div className="order-list" key={item.id}>
                            {" "}
                                <div className="order-desc">
                                    <img src={item.image} alt="" className='order-pic'/>
                                        <div className="order-detail">
                                            <p className="prod-name">{item.name}</p>
                                            <p className="prod-price">Rp.{item.totalPrice}</p>
                                        </div>
                                </div>
                                <div className="quantity">
                                    <button className='quant-btn' onClick={()=>incrementCartItem(index)}>+</button>
                                    <p className='order-quant'>{item.quantity}</p>
                                    <button className='quant-btn' onClick={() => decrementCartItem(index)} >-</button>
                                </div> 
                            {" "}
                            </div>
                        ))}
                    </div>
                </div>
            <div className="price-detail">
                <div className="subtotal-cont">
                    <p className='sub-title'>Subtotal</p>
                    <p className='sub-price'>Rp.{subtotal}</p>
                </div>
                <div className="tax-cont">
                    <p className="tax-title">Order Fee</p>
                    <p className="tax-price">Rp.{subtotal * 0.1}</p>
                </div>
            </div>
            <div className="total-cont">
                <div className="total">
                    <p className="total-title">Total</p>
                    <p className="total-price">Rp.{subtotal + (subtotal* 0.1)}</p>
                </div>
                <button className='proceed-btn' onClick={()=> {handleClick()}} disabled={!subtotal}>Proceed to Payment</button>
            </div>
        </div>
    </>
    )
    }

export default Checkout