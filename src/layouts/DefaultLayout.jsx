import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {

    const { loading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>

                {
                    loading && (
                        <Loader />
                    )
                }

                <Outlet />

            </main>
            <Footer />
        </>
    )
}