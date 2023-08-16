import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState('password');
  const isInputTypePassword = showPassword === 'password';
  const currentStatusShowPassword = isInputTypePassword ? 'text' : 'password';

  const handleShowPassword = () => setShowPassword(currentStatusShowPassword);

  return [showPassword, handleShowPassword, isInputTypePassword];
}

export default useShowPassword