import { describe, it }from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('sample test', () => {
    const { getByText } = render(<App />);
  const button = getByText(/count is 0/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");

  })
})
