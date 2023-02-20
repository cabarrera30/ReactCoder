import React, {useState} from 'react'

const Inicio = () => {
  
  const [count, setCount] = useState(0)
  const [click, setClick] = useState()

  const handeldclick = () => {
    setCount(count+1)
    setClick(new Date().toLocaleDateString())
  }

  return (
    <div>
      <p>Has clickeado: {count} veces</p>  
      <p>Ultimo Click: {click}</p>

      <button onClick={handeldclick}>Clickeame</button>
      
    </div>
  )
}

export default Inicio