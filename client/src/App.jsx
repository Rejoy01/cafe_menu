
import React from 'react'
import { MantineProvider } from '@mantine/core';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import "@mantine/core/styles.css"
const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
   <Header />
   <Body />
   <Footer />
  </MantineProvider>
  )
}

export default App
