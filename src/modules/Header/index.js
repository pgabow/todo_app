import './Header.css'
import logo from './img/new_logo_80.png'

const Header = () => {
   return ( 
      <header className="header">
         <a
            className="header-logo" 
            href="mailto:paul@gabow.ru?subject=Вперед через тернии к звездам"
            title="тупость и труд - всему перетруд!"
         >
            <img src={logo} alt="logo" />
         </a>
         <h1>Просто обычная тудушка</h1>
      </header>
   )
}

export default Header
