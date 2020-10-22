import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({id, imageUrl, title}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='menu-item'>
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;