import Card from '../../components/Search/Card'
import Footer from '../../components/Footer'
import './styles.css'

function Search() {
  const filter = ['Cidade', 'Próximos a mim', 'Nome', 'Tipo de Violência']

  return (
    <div>
      <form onSubmit="" className="search-form">
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
          // onChange={handleChange}
        >
          <option value="">Filtrar Busca</option>
          {filter.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        <button className="search__btn" type="submit">
          Buscar
        </button>
      </form>

      <div className="search__cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Search
