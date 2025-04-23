import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function AuthLayout() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand custom-header mx-auto">
                    <div className="nav navbar-nav w-100">
                        <NavLink className="nav-item nav-link" to="/admin">Admin</NavLink>

                        <div className="auth d-flex ms-auto gap-2">
                            <NavLink className="nav-item nav-link" to="/">Welcome</NavLink>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </nav>

            </header>
            <main>

                <Outlet />

            </main>

        </>
    )
}