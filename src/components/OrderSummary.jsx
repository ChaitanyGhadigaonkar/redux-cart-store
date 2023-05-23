import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import currencyFormatter from '../utils/currencyFormatter'

function OrderSummary() {
    const navigator = useNavigate()
    const handleCheckout=()=>{
        navigator("/")
    }
    const total = useSelector(state=>state.amount)
    const cart = useSelector(state=>state.cart)
  return (
    <div className='order w-96 border-[1px] rounded-lg md:w-96'>
        <div className="top h-10 flex items-center justify-center bg-slate-200 rounded-t-lg">
            <h1 className='text-xl font-semibold '>Order Summary</h1>
        </div>
      <div className="mid mx-2 my-2">
            <div className="row flex items-center justify-between text-base px-5 py-1">
                <span>Products({cart.length})</span> <span>{currencyFormatter.format(total-50)}</span>
            </div>
            <div className="row flex items-center justify-between text-base px-5 py-1">
                <span>Shipping</span> <span>{currencyFormatter.format(50)}</span>
            </div>
            <div className="row flex items-center justify-between text-base px-5 py-1">
                <span className='text-base font-semibold'>Total amount</span> <span className='text-base font-semibold'>{currencyFormatter.format(total)}</span>
            </div>
      </div>
      <div className="bottom h-10 flex items-center justify-center rounded-b-l text-base my-2">
        <button className='bg-slate-400 px-2 py-2 rounded-lg font-semibold hover:text-white' onClick={handleCheckout}>Go to checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
