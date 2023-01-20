const Header = () => {
    return (
        <div
        className="d-flex flex-column align-items-center p-5 bg-dark">
            <img
            src="../src/assets/imgs/logo.png"
            className="w-50 p-3"
            alt="" />
            <div className="bg-light px-4 py-2 rounded-pill d-flex flex-column align-items-center">
                <h3 className="text-dark text-center">Cards de personajes</h3>
                <h6 className="text-dark text-center">Busca a tu personaje favorito de las aventuras de Rick & Morty</h6>
            </div>
        </div>
    )
}

export default Header