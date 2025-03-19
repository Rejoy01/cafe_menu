import { Card, Text } from '@mantine/core'
import React from 'react'
import { cafeColors } from '../../Data/MenuItems'

const MenuItem = ({name,price}) => {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ marginBottom: 10 , background: cafeColors.card, color: cafeColors.text}} >
          <Text size="md" weight={500} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {name} <span>₹{price}</span>
          </Text>
        </Card>
    </div>
  )
}

export default MenuItem
