import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
  const navigateback = useNavigate()
  return (
    <div>CreateProduct
      <button onClick={() => {
        navigateback(-1)
      }}>Go back</button>
    </div>
  )
}

export default CreateProduct