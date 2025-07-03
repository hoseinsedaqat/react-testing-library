import * as React from 'react'
import { render, screen } from '..'

function Greeting(props) {
  return <div>Hello, {props.fruit}</div>
}

test('Greeting updates when props change using rerender', () => {
  const { rerender } = render(<Greeting fruit="Banana 🍌" />)
  expect(screen.getByText('Hello, Banana 🍌')).toBeInTheDocument()

  // Rerender with new props
  rerender(<Greeting fruit="Watermelon 🍉" />)
  expect(screen.getByText('Hello, Watermelon 🍉')).toBeInTheDocument()
})
