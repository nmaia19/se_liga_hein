import Card from '../../components/Search/Card'
import Footer from '../../components/Footer'
import './styles.css'
// import { Autocomplete } from '@react-google-maps/api'
import Map from '../../components/Search/Map'
import { useState } from 'react'

function Search() {
  const filters = [
    'Cidade',
    'Próximos a mim',
    'Estabelecimento',
    'Tipo de Violência'
  ]
  const places = [
    { address: 'Casa do Espeto - Av. Washington Soares, 1322, Fortaleza-CE' },
    { address: 'Casa do Espeto2 - Av. Washington Soares, 1322, Fortaleza-CE' },
    { address: 'Casa do Espeto3 - Av. Washington Soares, 1322, Fortaleza-CE' },
    { address: 'Casa do Espeto4 - Av. Washington Soares, 1322, Fortaleza-CE}' }
  ]
  const [filter, setFilter] = useState('clear')

  const handleSelectChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <form onSubmit="" className="search-form">
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
          // value={form.name}
          // onChange={handleChange}
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
          {places?.map((place, i) => (
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
