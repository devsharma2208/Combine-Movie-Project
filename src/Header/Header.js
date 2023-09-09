import { Link } from "react-router-dom";
import './Header.css'
export default function Header() {
    return (
        <>
            <header className="hd-1">
                <ul className="hd-1 ul-1">
                    <div className="hd-1-img-1 inp-src">
                        <li>
                            <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2kPj2MLfjJ2CceUh0e8gJYDpeLaPFeYjPA&usqp=CAU" alt="movies" /></Link>
                        </li>
                        <div className="inp-src-1">
                            <input type="text" id="inp-1" />
                            <input type="button" value="Search" />
                        </div>
                    </div>
                    <div className="home">
                        <li className="home li-1">
                            <Link to="/" className="hd-1-com">Home</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="about" className="hd-1-com">About</Link>
                        </li>
                    </div>
                </ul>
            </header>
        </>
    )
}