import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '../assets/images/clear.jpg'
import Fog from '../assets/images/fog.jpg'
import Cloudy from '../assets/images/cloudy.jpg'
import Rainy from '../assets/images/rainy.avif'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/stormy.jpg'
import sunny from '../assets/images/sunny.jpg'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      }
      else if (imageString.toLowerCase().includes('sunny') || imageString.toLowerCase().includes('sunny')) {
        setImage(sunny)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout