import "./styles.css";

const ocorrencia = [
  {
    nome: "teste",
    foiComVe: true,
    nomeVitima: "Suzana",
    idade: "18",
    violencia: "Racismo",
    agressaoFisica: true,
    cidade: "São Paulo",
    data: "05/10/2020",
    horario: "15:00:00",
    endereco: "Rua dos Bobos, 0",
    nomeEstabelecimento: "Supermercado Carrefour",
    descricao: "Um segurança me seguiu por 3 corredores e revistou minha bolsa",
  },
  {
    nome: "Suzana",
    foiComVe: true,
    nomeVitima: "Suzana",
    idade: "18",
    violencia: "Racismo",
    agressaoFisica: true,
    cidade: "São Paulo",
    data: "05/10/2020",
    horario: "15:00:00",
    endereco: "Rua dos Bobos, 0",
    nomeEstabelecimento: "Supermercado Carrefour",
    descricao: "Um segurança me seguiu por 3 corredores e revistou minha bolsa",
  },
  {
    nome: "Samuel",
    foiComVe: false,
    nomeVitima: "Suzana",
    idade: "18",
    violencia: "Racismo",
    agressaoFisica: true,
    cidade: "São Paulo",
    data: "05/10/2020",
    horario: "15:00:00",
    endereco: "Rua dos Bobos, 0",
    nomeEstabelecimento: "Supermercado Carrefour",
    descricao: "Um segurança me seguiu por 3 corredores e revistou minha bolsa",
  },
  {
    nome: "teste",
    foiComVe: true,
    nomeVitima: "Suzana",
    idade: "18",
    violencia: "Racismo",
    agressaoFisica: true,
    cidade: "São Paulo",
    data: "05/10/2020",
    horario: "15:00:00",
    endereco: "Rua dos Bobos, 0",
    nomeEstabelecimento: "Supermercado Carrefour",
    descricao: "Um segurança me seguiu por 3 corredores e revistou minha bolsa",
  },
];

function MyOccurrences() {
  return (
    <div>
      <h1>Minhas Ocorrências</h1>
      <div>
        <div className="filters">
          <select name="" id="">
            <option value="0">Ordenar</option>
            <option value="">Mais recente</option>
            <option value="">Menos recente</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="0">Tipo de ocorrência</option>
            <option value="">Violência física</option>
            <option value="">Constrangimento</option>
          </select>
        </div>
      </div>
      <main className="main__cards">
        <div>
          {ocorrencia.map((item) => {
            return (
              <div className="card__occurrence">
                <div className="card__occurrence--headercard">
                  <p>{item.nome}</p>
                  <p>{item.violencia}</p>
                </div>
                <div className="card__occurrence--address">{item.endereco}</div>
                <button className="card__occurrence--button">Ver mais</button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default MyOccurrences;
