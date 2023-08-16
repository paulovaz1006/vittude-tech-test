const InputDefault = ({label, type, placeholder,name, id, onChange}) => {
 
  return (
    <div className="box-input">
      <label htmlFor={label}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name}
        data-testid="input-test-id" 
        onChange={onChange}
        placeholder={placeholder}/>
    </div>
  )
}

export default InputDefault;