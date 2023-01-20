import { useEffect, useState } from "react"

const MiApi = () => {
    const [personajes, setPersonajes] = useState([])
    const [personajesOriginal, setPersonajesOriginal] = useState([])
    const [buscar, setBuscar] = useState("")
    const [alternar, setAlternar] = useState(1)
    const [textoBoton, setTextoBoton] = useState("Ordenar Alfabéticamente")

    const obtenerData = async () => {
        const api = await fetch ('https://rickandmortyapi.com/api/character')
        const arrayApi = await api.json()
        setPersonajes(arrayApi.results)
        setPersonajesOriginal(arrayApi.results)
    }

    // Función para ordenar array de personajes en base a su nombre

    const ordenandoArray = () => {
      
      setAlternar(alternar + 1)

    if (alternar == 1) {

      // Sorting con copia de array personajes:

      const arrayOrdenado = [...personajes].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } 
        if (a.name < b.name){
          return -1
        }
        return 0
      })

      // Asignación de nuevo valor para el array "personajes"

      setPersonajes(arrayOrdenado)
      setTextoBoton("Deshacer Orden")
      }

      else if (alternar > 1){
        setPersonajes(personajesOriginal)
        setAlternar(1)
        setTextoBoton("Ordenar Alfabéticamente")

    }
    return
    }

    // Hook useEffect para cargar la API una sola vez cada vez que se renderice la página

    useEffect(() => {
      obtenerData()
    }, [])

    // Código de retorno de componente miApi:

    return (
      <div className="pb-5">
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="input-group w-75">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar Personajes..."
            onChange={(e) => setBuscar(e.target.value)}/>
            <button 
            className="btn btn-outline-dark" 
            type="button"
            onClick={ordenandoArray}
            >{textoBoton}</button>
          </div>
        </div>
        

        <div className="flex-wrap d-flex w-100 gap-5 justify-content-center">
        {personajes.filter((filtrado) => filtrado.name.toLowerCase().includes(buscar.toLowerCase()))
        .map((personaje) => {
          return <div 
          className="cardRickMorty d-flex flex-column justify-content-between align-items-center border border-5 border-info" key={personaje.id}>
            <img className="rounded-circle w-75 border border-5 border-info" src={personaje.image} alt="" />
            <h3 className="text-center">{personaje.name}</h3>
            <div className="d-flex flex-column align-items-center justify-content-center gap-2">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="title-text m-0">Género</p>
                <h5 className="m-0">{personaje.gender === 'Male' ? 'Hombre' : 'Mujer'}</h5>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="title-text m-0">Especie</p>
                <h5 className="m-0">{personaje.species === 'Human' ? 'Humano' : 'Alien'}</h5>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="title-text m-0">Origen</p>
                <h5 className="text-center m-0">{personaje.origin.name === 'unknown' ? 'Desconocido' : personaje.origin.name}</h5>
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
    )
}

export default MiApi