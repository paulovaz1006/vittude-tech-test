import { render, screen } from "@testing-library/react"
import { InputDefault, InputPassword } from "."

describe('<InputDefault/>', () => {
  it('should render with text', () => {
    render(<InputDefault label="test" type="email"  placeholder="teste" 
    id />)
    const testIdTitle = screen.getByTestId('input-test-id')
    expect(testIdTitle).toBeInTheDocument()
  })
})

describe('<InputPassword/>', () => {
  it('should render with text', () => {
    render(<InputPassword label="test" type="email"  placeholder="teste" 
    id />)
    const testIdTitle = screen.getByTestId('input-password-test-id')
    expect(testIdTitle).toBeInTheDocument()
  })
})