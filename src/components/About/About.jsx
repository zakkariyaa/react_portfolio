import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Illo minima doloremque vel adipisci assumenda iure unde laboriosam nobis 
            voluptas commodi. Recusandae praesentium eius illo 
            soluta sit culpa quibusdam consectetur hic.
          </p>
          <a className='btn btn-primary' href="#contact">Lets talk</a>
        </div>

      </div>
    </section>
  )
}

export default About