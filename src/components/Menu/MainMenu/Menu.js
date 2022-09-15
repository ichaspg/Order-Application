import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderActions } from '../../../store/orderSlice'
import useFetch from '../../../useFetch'
import FoodListSmall from '../Foods/FoodListSmall'
import './menu.css'

const Menu = () => {
  //=======Ambil User Dari Local Storage ==========================
  const user = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()
  dispatch(orderActions.userInfo(user))
  
  //=================================================================
  return (
    <>
    <div className='Main'>
      <p className='greet'>Hello {user.name}</p>
      <p className='title'>Find your Food</p>
      <FoodListSmall/>
    </div>
    </>
  )
}

export default Menu