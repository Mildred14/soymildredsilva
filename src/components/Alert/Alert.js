import React from 'react'
import './Alert.scss'

export const Alert = ({msg, status}) => {
  return (
    <div className={`alert ${status}`}>
      <p className='text'>HOLAAAA</p>
    </div>
  )
}