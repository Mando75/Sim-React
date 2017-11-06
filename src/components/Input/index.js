import React, { Component } from 'react'
import './input.css'

export default class Input extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: ""
    }
  }
  
  render() {
    const { name, placeholder, type, className, onChange } = this.props;
    return (
      <input 
        name={name}
        placeholder={placeholder}
        className={`input-component ${className ? className : ''}`}
        type={type}
        onChange={onChange}
        >
      </input>
    )
  }
}