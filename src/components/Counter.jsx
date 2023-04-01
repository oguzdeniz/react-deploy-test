import React, { useState } from 'react'

export const Counter = () => {
  console.log('Counter mounted')
  let [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(--count)}>Decrease</button>
      {count}
      <button onClick={() => setCount(++count)}>Increase</button>
    </div>
  )
}
