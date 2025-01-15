import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.jpg'
import Cloudy from '../assets/icons/cloudy.png'
import Fog from '../assets/icons/fog.png'
import Rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.svg'
import storm from '../assets/icons/storm.svg'
import wind from '../assets/icons/windy.png'


const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(Cloudy)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(Rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(Fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])
  return (
    
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
        alert(icon)
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
      <div id="weatherData"></div>

    </div>
    
  )
}

export default MiniCard