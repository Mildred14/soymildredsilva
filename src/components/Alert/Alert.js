import React from 'react'
import Check from '../../assets/images/check.svg'
import CrossMark from '../../assets/images/cross-mark.svg'
import './Alert.scss'

export const Alert = ({msg, status}) => {
  return (
    <div className={`alert ${status}`}>
      <img src={status === 'success' ? Check : CrossMark} width="20" />
      <p className='text'>{msg}</p>
    </div>
  )
}