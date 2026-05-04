import './App.css'
import React, {useState} from 'react';
import {fetchCountries, fetchHolidaies} from "./api.ts";
import {useQuery} from '@tanstack/react-query'

// TODO: Fetch data from API
/*

1) запросить все страны и вывести их в списке
2) по выбранной стране выводить праздники - с кодом
3) На React query переписать запрос с бека - сначала через фетч

*/

function App() {
  const [pickedCountry, setPickedCountry] = useState('NL')

  const {data: countries, isPending} = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries
  })

  const {data: holidays} = useQuery({
    queryKey: ['holidays', pickedCountry],
    queryFn: () => fetchHolidaies(pickedCountry)
  })


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickedCountry(e.target.value)
  }

  console.log('test >>> ', countries)

  return (
    <>
      <section id="top">
        <div>
          <h1>Тут будет апп</h1>
            <label htmlFor="country">Country</label>
            <select value={pickedCountry} onChange={handleChange} name="county" id="county">
              {countries && countries.map(country => (
                <option key={country.isoCode} value={country.isoCode}>{country.name[0].text}</option>
              ))}
            </select>
        </div>
        {isPending && (
            <span>Loading...</span>
        )}
        <ul>
          {holidays?.map(item => (
            <li style={{listStyleType: 'none'}} key={item.id}>{item.startDate} - {item.name[0]['text']}</li>
          ))}
        </ul>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
