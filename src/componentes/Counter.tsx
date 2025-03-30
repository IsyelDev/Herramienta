import React from 'react'

import { useState } from 'react'

export default function Counter() {
  const [first, setfirst] = useState(0)
    
  return (
    <div className='mt-5'>
      <h3>Curso {first}</h3>
      <button className='btn btn-outline-primary mt-4' onClick={()=>setfirst(first=>first+1)}>+ 1</button>
      <button className='btn btn-outline-primary mt-4' onClick={()=>setfirst(first=>first+2)}>+ 2</button>
    </div>
  )
}
