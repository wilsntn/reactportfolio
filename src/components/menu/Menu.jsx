import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={"menu "+(menuOpen && "active")}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#Intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#Portfolio">Portfolio</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contato</a>
          </li>
      </ul>
  </div>;
}
