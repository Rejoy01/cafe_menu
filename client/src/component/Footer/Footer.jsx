import { Text } from '@mantine/core'
import React from 'react'
import { cafeColors } from '../../Data/MenuItems'

const Footer = () => {
  return (
     <footer style={{ textAlign: 'center', padding: '20px 0',  background: cafeColors.headerFooter, color: cafeColors.text, marginTop: 20 }}>
        <Text size="sm">&copy; 2025 Cafe. All rights reserved.</Text>
      </footer>
  )
}

export default Footer
