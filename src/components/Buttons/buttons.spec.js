import { render, screen } from "@testing-library/react"
import { ButtonPrimary, ButtonSecundary, InputDefault, InputPassword } from "."

describe('<ButtonPrimary/>', () => {
  it('should render with text', () => {
    render(<ButtonPrimary />)
    const testIdButton = screen.getByTestId('button-primary-test')
    expect(testIdButton).toBeInTheDocument()
  })
})

describe('<ButtonSecundary/>', () => {
  it('should render with text', () => {
    render(<ButtonSecundary />)
    const testIdButton = screen.getByTestId('button-secundary-test')
    expect(testIdButton).toBeInTheDocument()
  })
})