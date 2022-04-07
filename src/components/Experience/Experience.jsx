import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {SiFlask} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <AiFillHtml5 className='experience__icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className='experience__icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__icon' />
              <div>
                <h4>Reactjs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        {/* ===== END FRONTEND ===== */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <FaPython className='experience__icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoNodejs className='experience__icon' />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiFlask className='experience__icon' />
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiDjango className='experience__icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience