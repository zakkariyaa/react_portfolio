import { useState } from 'react'

import './nav.css'

import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'
import {VscProject} from 'react-icons/vsc'
import {BiMessageRoundedDots} from 'react-icons/bi'


const Nav = () => {
  const [isActive, setActive] = useState('#')

  return (
    <nav>
      <a
        onClick={(e) => setActive('#')}
        className={isActive === '#' ? 'active' : ''}
        href="#">
        <FaHome />
      </a>
      <a
        onClick={() => setActive('#about')}
        className={isActive === '#about' ? 'active' : ''}
        href="#about">
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActive('#services')}
        className={isActive === '#services' ? 'active' : ''}
        href="#services">
        <MdMiscellaneousServices />
      </a>
      <a
        onClick={() => setActive('#portfolio')}
        className={isActive === '#portfolio' ? 'active' : ''}
        href="#portfolio"><VscProject />
      </a>
      <a
        onClick={() => setActive('#contact')}
        className={isActive === '#contact' ? 'active' : ''}
        href="#contact">
        <BiMessageRoundedDots />
      </a>
    </nav>
  )
}

export default Nav