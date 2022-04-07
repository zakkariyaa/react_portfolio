import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="#" target="_blank"><BsLinkedin /></a>
        <a href="#" target="_blank"><BsGithub /></a>
        <a href="#" target="_blank"><BsTwitter /></a>
        <a href="#" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials