import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav w-100">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>

                    <div className="auth d-flex ms-auto gap-2">
                        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </nav>

        </header>
    )
}