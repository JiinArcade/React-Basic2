import React from 'react' //rafce 누르면 자동 생성
import logo from '../../applelogo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <a href="./index.html">
            <img src={logo} alt="logo" />
          </a>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          <li className="gnb-item">
            <a href="./menu1.html">menu1</a>
          </li>
          <li className="gnb-item">
            <a href="./menu2.html">menu2</a>
          </li>
          <li className="gnb-item">
            <a href="./menu3.html">menu3</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header