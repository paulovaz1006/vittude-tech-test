import { render, screen } from "@testing-library/react"
import Title from "."

describe('<Title/>', () => {
  it('should render with text', () => {
    const text = "bem vindo"
    render(<Title>{text}</Title>)
    const testIdTitle = screen.getByTestId('title')
    expect(testIdTitle).toHaveTextContent(text)
  })
})