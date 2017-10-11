import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header(props) {
  return (
    <div className='header-component'>
      Header  
      <Link to="/">HOME</Link>
    </div>
  )
}