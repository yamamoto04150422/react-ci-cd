import { describe, it }from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('sample test', () => {
    const { getByText } = render(<App />);
  const button = getByText(/count iws 0/i);
  fireEvent.click(button);

  })
})
