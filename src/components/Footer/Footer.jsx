import './footer.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <div class="container footer__container">

        <div class="footer__1">
          <a class="footer__logo" href="index.html"><h4>ZY Tech</h4></a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque, maiores!
          </p>
        </div>

        <div class="footer__2">
          <h4>Permalinks</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Our Works</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="faqs.html">FAQs</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div>
                
        <div class="footer__3">
          <h4>Privacy</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">503(c) Non-Profit</a></li>
          </ul>
        </div>
                
        <div class="footer__4">
          <h4>Contact Us</h4>
          <p>
            +(44) 000 0000<br />
            support@hayaan.com
          </p>
          <ul class='footer__socials'>
            <li><a href="#" target="_blank"><AiOutlineInstagram /></a></li>
            <li><a href="#" target="_blank"><AiOutlineFacebook /></a></li>
            <li><a href="#" target="_blank"><AiOutlineMail /></a></li>
            <li><a href="#" target="_blank"><AiOutlinePhone /></a></li>
          </ul>
        </div>

      </div>

      <div class="footer__copyright">
        <small>Copyright &copy; Hayaan Coding Bootcamp</small>
      </div>
    </footer>
  )
}

export default Footer