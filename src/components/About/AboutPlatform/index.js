import './styles.css'
import AboutUsImage from './../../../assets/images/aboutus__foto.png'

function AboutPlatform() {
  return (
    <div className="aboutus__content">
      <div className="aboutus__image">
        <img src={AboutUsImage} alt="" />
      </div>
      <div className="aboutus__text">
        <h1>Como funciona</h1>
        <p>
          Breve passo a passo sobre o que é possível fazer na plataforma . Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          <ul>
            <li>
              Pariatur quisquam neque ullam vel nihil autem sunt dicta commodi,
            </li>
            <li>
              facere harum cumque similique laborum deleniti voluptate soluta
              blanditiis! Eveniet, nulla animi.
            </li>
            <li>
              Pariatur quisquam neque ullam vel nihil autem sunt dicta commodi,
            </li>
          </ul>
        </p>

        <div className="aboutus__button">
          <button>Procurar ocorrências</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPlatform
