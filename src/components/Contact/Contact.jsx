import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Our Contacts</h2>
      <div class="container contact__container">
        <aside class="contact__aside">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, 
            doloribus voluptatibus inventore repudiandae praesentium nobis 
            expedita excepturi, fugit, provident qui aperiam dignissimos
          </p>
          <ul class="contact__details">
            <li>
              <AiOutlineMail className='contact__socials' />
              <h5>+(44) 000 0001</h5>
              </li>
            <li>
              <AiOutlinePhone className='contact__socials' />
              <h5>support@hayaan.com</h5>
              </li>
            <li>
              <FiMapPin className='contact__socials' />
              <h5>London, England</h5>
            </li>
          </ul>
        </aside>

        <form class="contact__form">
          <div class="contact__form-inputs">
            <input type="text" name="name" placeholder="Your name:" required />
            <input type="email" name="email" placeholder="your@yourcompany.com" required />
            <input type="number" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Message" rows="7" required></textarea>
          </div>

          <div class="buttons">
            <button class="btn btn-primary" type="submit">Send</button>
            <button class="btn" type="reset">Reset</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact