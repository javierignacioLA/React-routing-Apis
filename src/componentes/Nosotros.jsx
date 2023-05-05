import React, { useEffect, useState } from 'react'

const Nosotros = () => {
  
  const [cursos, setCursos] = useState ([])
  const [usuarios, setUsuarios] = useState([])
  const datos = [
    {id: 1, nombre: "React"},
    {id: 2, nombre: "Vuejs"},
    {id: 3, nombre: "Angularjs"}
  ]

  useEffect(() => {
    setCursos(datos)
    const obtenerUsuarios = async () => {
      try{
        const datos = await fetch ("https://jsonplaceholder.typicode.com/users")
        const users = await datos.json()
        setUsuarios(users)
      }catch (error){
        console.log (error)
      }
     }
    obtenerUsuarios()
   }, [])

  

  return (
    <div>
      <h2 style={{color: 'green'}}>Nosotros</h2>
      {cursos? (<ul>
        {cursos.map(curso => 
          <li key={curso.id}>{curso.nombre}</li>
        )}
      </ul>): 
      (<h2>Cargando cursos</h2>)
      }
      <hr></hr>
      {usuarios? (<ul>
        {usuarios.map(users => 
          <li key={users.id}>{users.name} - {users.email}</li>
        )}
      </ul>) : 
        (<h2>Cargando</h2>)

      }
    </div>
  )
}

export default Nosotros