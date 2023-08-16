import Links from "./components/Links";
import Logo from "./components/Logo";
import "./style.scss";

const TopBar = () => {
  return (
    <header className="box-header">
      <Logo />
      <Links />
    </header>
  )
}

export default TopBar;