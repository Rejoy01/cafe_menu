import CafeMenu from './component/menu/Menu'
import Menu from './component/menu/Menu'
import React from 'react'
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <CafeMenu />
  </MantineProvider>
  )
}

export default App
