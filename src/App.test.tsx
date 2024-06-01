import { describe, it }from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('sample test', () => {
    render(<App />)
    
    screen.debug();
  })
})
