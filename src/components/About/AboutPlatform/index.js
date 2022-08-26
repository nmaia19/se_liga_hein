import "./styles.css";
import AboutUsImage from "./../../../assets/images/aboutus__foto.png";

function AboutPlatform() {
  return (
    <div className="aboutus__content">
      <div className="aboutus__image">
        <img src={AboutUsImage} alt="" />
      </div>
      <div className="aboutus__text">
        <h1>Como funciona</h1>
        <p>
          Na página Pesquisar você pode buscar ocorrências por proximidade, pelo
          nome da cidade, pelo nome do estabelecimento ou pelo tipo de violência
          (Racismo, Machismo, Capacitismo, Homofobia, Transfobia, LGBTfobia,
          Xenofobia, Gordofobia, Intolerância Religiosa, dentro outros). As
          ocorrências registradas na nossa plataforma contêm o relato da vítima
          ou de quem presenciou, o nome e o endereço do estabelecimento, a data
          e o horário do ocorrido. O nome da vítima ou de quem presenciou é
          preservado.
        </p>
        <p>
          Para fazer o relato de um caso, você deve clicar no botão “Criar
          ocorrência”, localizado no topo desta página. O único requisito é que
          você tenha 18 anos ou mais. Aconselhamos que menores de idade peçam a
          algum adulto que registre o ocorrido.
        </p>
        <p>
          A partir das informações preenchidas no formulário será gerada uma
          ocorrência que poderá ser encontrada por futuros usuários ao buscarem
          o nome, o local do estabelecimento ou o tipo de violência inseridos.
        </p>
      </div>
      <div className="aboutus__button">
        <button className="button">Procurar ocorrências</button>
      </div>
    </div>
  );
}

export default AboutPlatform;
