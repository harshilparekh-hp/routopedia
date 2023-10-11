import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {

  const {cryptoSymbol, code} = useParams();

  return (
    <div>
      CryptoDetail

      <h3>{cryptoSymbol}</h3>
      <p>crypto code: {code}</p>
    </div>
  )
}

export default CryptoDetail