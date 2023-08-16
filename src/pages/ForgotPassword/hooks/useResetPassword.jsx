import { useState } from "react";
import showToastify from "../../../utils/showToastify";

const useResetPassword = () => {
  const [ emailReset, setEmailReset] = useState('')

  const handleChangeInfoResetEmail = (email) => setEmailReset(email)
  const handleResetPassword = () => 
    emailReset === '' ?
    showToastify(`Informe um e-mail`, 'warning') :
    showToastify(`Um e-mail foi enviado para ${emailReset}`, 'success')

  return {handleResetPassword, handleChangeInfoResetEmail, emailReset}
}

export default useResetPassword