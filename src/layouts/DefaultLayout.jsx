import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function DefaultLayout() {

    const { loading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>

                {
                    loading && (
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                }

                <Outlet />

            </main>
            <Footer />
        </>
    )
}