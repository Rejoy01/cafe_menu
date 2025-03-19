import { Title } from '@mantine/core'
import React from 'react'
import { cafeColors } from '../../Data/MenuItems.js'

const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px 0', background: cafeColors.headerFooter, color: cafeColors.text }}>
       <Title order={1}>Cafe Menu</Title>
     </header>
  )
}

export default Header
