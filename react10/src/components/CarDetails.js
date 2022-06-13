import React from 'react'

const CarDetails = ({brand, km , color, newcar}) => {
  return (
    <div>
    <h2>Detalhes do Carro</h2>
    <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
    </ul>
    {newcar && <p>este carro é novo</p>}
    </div>
  )
}

export default CarDetails