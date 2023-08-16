import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useShowPassword from './hooks/useShowPassword';

function InputPassword({onChange}) {
  const [showPassword, handleShowPassword, isInputTypePassword] = useShowPassword()
  
  return (
    <div className="box-input">
      <label htmlFor="senha">Senha</label>
      <div className="input-password">
        <input
          type={showPassword}
          id="password"
          name="password"
          onChange={onChange}
          data-testid="input-password-test-id"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        {isInputTypePassword
          ? <FaEye onClick={handleShowPassword} />
          : <FaEyeSlash onClick={handleShowPassword} />}
      </div>
    </div>
  );
}
export default InputPassword;
