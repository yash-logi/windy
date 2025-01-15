import { useState,useEffect  } from 'react'
import './App.css'
import search from './assets/icons/search.png'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'

function App() {

  const [input, setInput] = useState('')
  const { weather,setWeather,  values, place, setPlace } = useStateContext();
  // console.log(weather)
  


  const submitCity = (inp) => {
   // alert("hhhhh")
     setPlace(inp)
    alert(values)

     setInput('')
  }

  const fetchWeather = async () => {
    const options = {
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        params: {
            aggregateHours: '24',
            location: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames: 0,
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host':  'api.openweathermap.org'
        }
    }

    try {
        const response = await axios.request(options);
        console.log(response.data)
        const thisData = Object.values(response.data.locations)[0]
        setLocation(thisData.address)
        setValues(thisData.values)
        setWeather(thisData.values[0])
    } catch (e) {
        console.error(e);
        // if the api throws error.
        alert('This place does not exist')
    }
}

useEffect(() => {
    fetchWeather()
}, [place])

useEffect(() => {
    console.log(values)
}, [values])
  return (
   // <div><h1>App</h1></div>
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Windy</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
           <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' /> 
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              submitCity("Delhi")
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={place}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App