import React from 'react'
import { BarLoader } from 'react-spinners'
import './loading.css'

export default function Loading(props) {
  const { width, height, className } = props;
  return (
    <div className={`loading-component ${className ? className : '' }`}>
      <BarLoader color={"#F4FAFF"} height={height || 2} width={width || 150}/>
    </div>
  )
}