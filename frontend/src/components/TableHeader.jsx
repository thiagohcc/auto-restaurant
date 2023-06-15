import React, { useContext } from 'react'
import GeneralContext from '../context/generalContext'

export default function TableHeader() {
  const { user } = useContext(GeneralContext);
  return (
    <div>
      <h1>{ user.userLogin }</h1>
      <div>
        <button
          type="button"
        >
          PEDIDO ATUAL
        </button>
        <button
          type="button"
        >
          MEUS PEDIDOS
        </button>
        <button
          type="button"
        >
          FECHAR CONTA
        </button>
      </div>
    </div>
  )
}
