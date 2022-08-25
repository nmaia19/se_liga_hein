import Card from '../../components/Search/Card'
import Footer from '../../components/Footer'
import './styles.css'
import Map from '../../components/Search/Map'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Search() {
  const filters = ['Cidade', 'Estabelecimento', 'Tipo de Violência']

  // const places = [
  //   {
  //     name: 'Nay',
  //     victim: 'Sim',
  //     victimName: 'coisinha',
  //     age: '20',
  //     violence: 'Xenofobia',
  //     physicalAggression: 'Não',
  //     state: 'PB',
  //     city: '2507507',
  //     date: '2022-08-25',
  //     time: '11:56',
  //     local: 'R. Franca Filho, 96 - Manaíra, João Pessoa - PB',
  //     establishment: 'Hao',
  //     description: 'Foi babado e destruição'
  //   },
  //   {
  //     name: 'Anônimo',
  //     victim: 'Não',
  //     victimName: 'tiaga',
  //     age: '30',
  //     violence: 'LGBTfobia',
  //     physicalAggression: 'Sim',
  //     state: 'PB',
  //     city: '2504009',
  //     date: '2022-08-17',
  //     time: '03:00',
  //     local: 'R. Irineu Joffily, 176 - Centro, Campina Grande - PB',
  //     establishment: 'La Suissa',
  //     description: 'briga e confusão, coxinha pra todo lado'
  //   }
  // ]

  const [places, setPlaces] = useState([])
  const [filter, setFilter] = useState('clear')
  const [input, setInput] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const handleSelectChange = e => {
    setFilter(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (filter === 'Cidade') {
      setFilteredPlaces(
        places.filter(place =>
          place.local.toLowerCase().includes(input.toLowerCase())
        )
      )
    } else if (filter === 'Estabelecimento') {
      setFilteredPlaces(
        places.filter(place =>
          place.establishment.toLowerCase().includes(input.toLowerCase())
        )
      )
    } else if (filter === 'Tipo de Violência') {
      setFilteredPlaces(
        places.filter(place =>
          place.violence.toLowerCase().includes(input.toLowerCase())
        )
      )
    } else if (filter === 'clear' && input !== '') {
      let ctrArr = []
      places.forEach((place, index) => {
        for (const property in place) {
          if (
            place[property].toLowerCase().includes(input.toLowerCase()) &&
            ctrArr.includes(places[index]) === false
          ) {
            ctrArr.push(places[index])
          }
        }
      })
      setFilteredPlaces(ctrArr)
    } else if (input === '') {
      setFilteredPlaces(places)
    }

    setInput('')
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('occurrences'))
    if (items) {
      setPlaces(items)
      setFilteredPlaces(items)
    }
  }, [])

  // useEffect(() => setFilteredPlaces(places), [])

  // useEffect(() => {
  //   const getPlaces = async () => {
  //     const response = await axios.get(
  //       'https://6304f02a697408f7edbe9e13.mockapi.io/occorrences'
  //     )
  //     console.log(response.data.results)
  //     setPlaces(response.data.results)
  //     setFilteredPlaces(response.data.results)
  //   }
  //   getPlaces()
  // }, [])

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
            fill="#480CA8"
          />
        </svg>

        <input
          className="search__input"
          placeholder="Digite sua busca"
          type="text"
          name="name"
          onChange={e => setInput(e.target.value)}
          value={input}
        />

        <select
          className="search__select"
          name="category"
          onChange={handleSelectChange}
        >
          <option value="clear">Filtrar Busca</option>
          {filters.map(filter => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>

        <button className="search__btn" type="submit">
          Buscar
        </button>
      </form>
      <div className="main__content">
        <div>
          {filteredPlaces?.map((place, i) => (
            <div className="search__cards" key={i}>
              <Card place={place} />
            </div>
          ))}
        </div>

        <div className="map">
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search
