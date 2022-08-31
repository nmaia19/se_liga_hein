import "./styles.css";
import descriptionImage from "../../../assets/images/people.webp";

function AboutDescription() {
  return (
    <div className="about-description__content">
      <div className="about-description__text">
        <h1>Sobre nós</h1>
        <p>
          O Se Liga, hein é uma plataforma que faz o mapeamento de casos de
          violências ocorridos em estabelecimentos no Brasil. Nós temos como
          objetivo promover segurança a todos os grupos sociais que são
          cotidianamente hostilizados.
        </p>
        <p>
          Nossa expectativa é que a divulgação desses dados tenham efeito de
          alerta e prevenção de violências.
        </p>
        <p>
          Aqui, com uma rápida pesquisa você pode se informar sobre
          estabelecimentos próximos que possuem registros de situações de
          intolerância, e optar por evitá-los.
        </p>
      </div>
      <div className="about-description__image">
        <img src={descriptionImage} alt="" />
      </div>
    </div>
  );
}

export default AboutDescription;
