const ButtonPrimary = ({children, handleClick}) =>  (
  <button type="button" data-testid="button-primary-test" onClick={handleClick} className="button-default button-primary">{children}</button>
)

export default ButtonPrimary
