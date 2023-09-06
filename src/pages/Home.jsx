import React from 'react'
import ShopingCard from '../components/ShopingCard'
import { Box } from '@mui/material'
import { centerDiv } from '../utils/CommonStyls'

const Home = () => {
  return (
    <Box padding={'100px 0'} sx={{...centerDiv,flexWrap:'wrap'}}>

      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>
    </Box>

  )
}

export default Home