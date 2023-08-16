import Translate from "./Translate";

const Links = () => {
  return (
    <nav className="menu-header">
      <ul>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <Translate />
        </li>
      </ul>     
    </nav>
  )
}

export default Links;