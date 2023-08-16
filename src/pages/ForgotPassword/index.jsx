import { Link } from "react-router-dom";
import { ButtonPrimary, ButtonSecundary, ButtonsRoot } from "../../components/Buttons";
import { InputDefault } from "../../components/Inputs";
import { TopBar } from "../../layout"
import '../Login/style.scss' 
import useResetPassword from "./hooks/useResetPassword";
import ToastInfo from "../../components/ToastInfo";

const ForgotPassword = () => {  
  const {handleResetPassword, handleChangeInfoResetEmail } = useResetPassword()
   
  return (
    <>
      <div className="box-default">
        <div className="box-form-login  align-default">
          <form className="form-default">
              <InputDefault 
                label="Digite seu e-mail"
                type="email"
                id="email"
                value=""
                onChange={(e) => handleChangeInfoResetEmail(e.target.value)}
                placeholder="email@exemplo.com"
              />
              <ButtonsRoot>
                <ButtonPrimary handleClick={handleResetPassword}>
                  Recuperar senha
                </ButtonPrimary>
                <Link to={'/'} className="link-to-button">
                  <ButtonSecundary>
                    Voltar              
                  </ButtonSecundary>
                </Link>
              </ButtonsRoot>
              <ToastInfo />
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword