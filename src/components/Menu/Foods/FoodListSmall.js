import React, { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import useFetch from '../../../useFetch'
import './foodlistsmall.css'
import Carousel from '../Carousel/Carousel'

const FoodListSmall = () => {
    const {data:foods,isPending,error} = useFetch('http://localhost:8000/foods')
    const [data, setData] = useState(foods)
    useEffect(()=>{
        setData(foods)
    },[foods])

     //==================BUAT CAROUSEL CATEGORY======================================
    const catCarousel = useRef()
    const [width,setWidth] = useState(0);
    useEffect(()=>{
        setWidth(catCarousel.current.scrollWidth - catCarousel.current.offsetWidth)
    })

    const filterResult = (catItem) => {
        const result = foods.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result)
    }

    //==================================================================
    //==================BUAT SEARCH======================================
    const [searchInput,setSearchInput] = useState("")
    const [filteredSearchResult,setFilteredSearchResult] = useState([])

    const handleSearch = (searchValue) => {
        setSearchInput(searchValue)
        data.filter((filtered => {
            return Object.values(filtered).join('').toLowerCase().includes(searchInput.toLowerCase())
        }))
        setFilteredSearchResult(filterSearch)
    }

    const filterSearch = data.filter((filtered) => {
        return Object.values(filtered).join('').toLowerCase().includes(searchInput.toLowerCase())
    })

    useEffect(() => {
        
    })
    const searchSubmit = (e) => {
        e.preventDefault()
        if (filteredSearchResult.length > 1) {
            setData(filteredSearchResult)
        }else{
            setData(foods)
        }
        
    }
    //================================================================== 
    return (
        <div className='food-list'>
        <div className="search-cont">
            <form action="" onSubmit={searchSubmit}>
                <input 
                    type="text" 
                    className='search' 
                    placeholder='What Would You Like?'
                    onChange={(e) => handleSearch(e.target.value)}
                />
            <input type="submit" className='search-submit' />

            </form>
        </div>
        <Carousel />
        <div className="category-btn-cont">
        <motion.div ref={catCarousel} className='category-carousel'>
            <motion.div 
                drag="x" 
                className='cat-inner-carousel'
                dragConstraints={{right:0,left: -width}}
                >
                    <motion.div className='cat-item'>
                        <button className='category-btn' onClick={()=> setData(foods)}>All</button>
                    </motion.div>

                    <motion.div className='cat-item'>
                        <button className='category-btn' onClick={()=> filterResult('Signature')}>Signature</button>
                    </motion.div>

                    <motion.div className='cat-item'>
                        <button className='category-btn' onClick={()=> filterResult('Coffee')}>Coffee</button>
                    </motion.div>

                    <motion.div className='cat-item'>  
                        <button className='category-btn' onClick={()=> filterResult('Manual Brew')}>Manual Brew</button>
                    </motion.div>

                    <motion.div className='cat-item'>       
                        <button className='category-btn' onClick={()=> filterResult('Milk Base')}>Milk Base</button>
                    </motion.div>

                    <motion.div className='cat-item'>  
                        <button className='category-btn' onClick={()=> filterResult('Refreshment')}>Refreshment</button>
                    </motion.div>

                    <motion.div className='cat-item'>  
                        <button className='category-btn' onClick={()=> filterResult('Tea')}>Tea</button>
                    </motion.div>

                    <motion.div className='cat-item'>  
                        <button className='category-btn' onClick={()=> filterResult('Main Course')}>Main Course</button>
                    </motion.div>

                    <motion.div className='cat-item'>  
                        <button className='category-btn' onClick={()=> filterResult('Snack')}>Snacks</button>
                    </motion.div>
                </motion.div>
        </motion.div>              
        </div>
            {data.map((value)=>(
            <Link key={value.id} to={`/foods/${value.id}`}>
            <div className="food-item" >
            <img src={value.image } alt="" className='food-img'/>
            <div className="food-info">
                <p className="food-name">{value.name}</p>
                <p className="food-desc">{value.description}</p>
                <p className='food-price'>{`Rp.${value.price}`}</p>
            </div>
            </div>
            </Link>
        ))}
        </div>
  )
}

export default FoodListSmall