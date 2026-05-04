import './App.css'
import React, {useState, useEffect} from 'react';
import {type DataFetch, fetchCountries, fetchHolidaies, type IHolidaies} from "./api.ts";

// TODO: Fetch data from API
/*

1) запросить все страны и вывести их в списке
2) по выбранной стране выводить праздники - с кодом
3) На React query переписать запрос с бека - сначала через фетч


5) быстро статью глянуть - почему через Реакт квери лучше запрос делать, а не через фетч

*/

function App() {
  const [countyList, setCountyList] = useState<DataFetch[] | null>(null)
  const [pickedCountry, setPickedCountry] = useState('NL')
  const [holidaylist, setHolidayList] = useState<IHolidaies[] | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickedCountry(e.target.value)
    const fetchData = async () => {
      try {
        const data = await fetchHolidaies(e.target.value)
        setHolidayList(data)
      } catch {
        console.error('Problems with fetch holiday list')
      }
    }
    fetchData()
  }



  useEffect(() => {

    let cancel = false;

    const load = async () => {
      try {
        const data = await fetchCountries()
        if(!cancel) setCountyList(data)
      } catch {
        console.error('Could not fetch data')
      }
    }
    load()

    return () => {
      cancel = true
    }
  }, [])

  console.log('test >>> ', countyList)

  return (
    <>
      <section id="center">
        <div>
          <h1>Тут будет апп</h1>
            <label htmlFor="country">Country</label>
            <select value={pickedCountry} onChange={handleChange} name="county" id="county">
              {countyList && countyList.map(country => (
                <option key={country.isoCode} value={country.isoCode}>{country.name[0].text}</option>
              ))}
            </select>
        </div>
        <ul>
          {holidaylist?.map(item => (
              <li key={item.id}>{item.name[0]['text']}</li>
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
