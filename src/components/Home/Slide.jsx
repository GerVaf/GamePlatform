import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useSelector } from 'react-redux';
const Slide = () => {
    const SlideData = useSelector(state=>state?.product?.item)

    console.log(SlideData)
  return (
    <>
       <Carousel slideSize="70%" height={200} slideGap="md" loop dragFree withControls={false} withIndicators>
     {/* <Image src={ }/> */}
    </Carousel>
    </>
  )
}

export default Slide
