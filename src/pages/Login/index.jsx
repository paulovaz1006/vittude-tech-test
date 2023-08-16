import { TopBar } from "../../layout"
import './style.scss' 
import ImageLogin from "./components/ImageLogin";
import { InputDefault, InputPassword } from "../../components/Inputs";
import Buttons from "./components/FormLogin/Buttons";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from "../../components/Titles";
import useAuth from "./hooks/useAuth";
import ToastInfo from "../../components/ToastInfo";

const Login = () => {
  const {handleChangeInfoLogin, handleSignIn}= useAuth()

  return (
    <>
      <TopBar />
      <div className="grid-container">
        <div className="box-form-login">
          <Title>Bem vindo <br/>
          a Vittude!</Title>
          <form className="form-default">
            <InputDefault 
              label="Login"
              type="text"
              id="username"
              name="username"
              value=""
              onChange={handleChangeInfoLogin}
              placeholder="email@exemplo.com"
            />
            <InputPassword onChange={handleChangeInfoLogin} />
            <Buttons handleClick={handleSignIn} />
          </form>
        </div>
        <ImageLogin />
      </div>
     <ToastInfo />
    </>
  )
}

export default Login