import React from 'react'
import Tick from '../assets/tick.png'


export default function formSubmitted() {
  return (
    <div className='thankyou-page'>
        <img src={Tick} alt="" width="40%"/>
        <h1>Thank You!</h1>
        <p>Your form is successfully submitted</p>
    </div>
  )
}
