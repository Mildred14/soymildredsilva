import React from 'react'
import './Loading.scss'

export const Loading = () => {
  return (
    <div className="items">
      <div className='item--card loading-card'>
        <div className='wrap-img'>
          <div className='img-skeleton bg-gray'/>
        </div>
        <div className='wrap-skeleton-content'>
          <div className='title-skeleton bg-gray'/>
          <div className='content-skeleton bg-gray'/>
        </div>
      </div>
    </div>
  )
}