const Footer = (props) => {

    // Contiene el uso de props

    return (
        <div className="d-flex justify-content-center flex-column align-items-center p-5 bg-dark">
            <p className="text-light">Prueba Desafío React JS</p>
            <p className="text-light">{props.devBy}</p>
            <p className="text-justify text-light w-25 ">Landing page consumiendo la API Rick & Morty, creando cards con cada característica de los personajes, esta página utiliza clases de Bootstrap, React JS & Vite.</p>
        </div>
    )
}

export default Footer