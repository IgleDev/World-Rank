import "./header.css"
import Logo from "../img/Logo.svg"

const Header = () => {
    return (
        <header>
            <div className="container-fluid w-100">     
                <div className="row w-100">
                    <div className="col-12 mt-5">
                        <h1 className="text-primary text-center"><img src={Logo} alt="Mi SVG feliz"/></h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;