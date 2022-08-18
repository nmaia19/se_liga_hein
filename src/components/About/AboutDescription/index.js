import './styles.css'
import descriptionImage from './../../../assets/images/aboutus_02.png'

function AboutDescription() {
  return (
    <div className="description__content">
      <div className="description__text">
        <h1>Sobre nós</h1>
        <p>
          Versão extendida sobre a plataforma e o que ela se propôe. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Pariatur quisquam neque
          ullam vel nihil autem sunt dicta commodi, facere harum cumque
          similique laborum deleniti voluptate soluta blanditiis! Eveniet, nulla
          animi. Pariatur quisquam neque ullam vel nihil autem sunt dicta
          commodi, facere harum cumque similique laborum deleniti voluptate
          soluta blanditiis! Eveniet, nulla animi Lorem ipsum dolor sit amet
          consectetur adipisicing elit!
        </p>
      </div>
      <div className="description__image">
        <img src={descriptionImage} alt="" />
      </div>
    </div>
  )
}

export default AboutDescription
