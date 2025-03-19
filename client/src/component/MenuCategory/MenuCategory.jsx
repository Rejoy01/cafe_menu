import { Title } from '@mantine/core'
import React from 'react'
import MenuItem from '../MenuItem/MenuItem'


const MenuCategory = ({category,items}) => {
  return (
    <div>
        <Title order={2} style={{ margin: '20px 0' }}>{category}</Title>
          {items.map((item, index) => (
            <MenuItem key={index} name={item.name} price={item.price} />
          ))}
    </div>
  )
}

export default MenuCategory
