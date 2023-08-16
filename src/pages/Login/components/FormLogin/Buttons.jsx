import { ButtonPrimary, ButtonSecundary, ButtonsRoot } from "../../../../components/Buttons"
import { Link } from "react-router-dom";

const Buttons = ({handleClick}) => {
  return (
    <ButtonsRoot>
      <ButtonPrimary handleClick={handleClick}>Acessar </ButtonPrimary >
      <Link to={'/esqueceu-a-senha'} className="link-to-button">
      <ButtonSecundary>
       Esqueci minha senha
      </ButtonSecundary>
      </Link>
    </ButtonsRoot>
  )
}

export default Buttons
