import React from 'react'
import { useSelector } from 'react-redux'

import Count from './components/Count'
import Hook from './components/Hook'

export default function App() {
  const count = useSelector(({ count }) => count)
  return (
    <div>
      <span>{count}</span>
      <Count />
      <Hook />
    </div>
  )
}
