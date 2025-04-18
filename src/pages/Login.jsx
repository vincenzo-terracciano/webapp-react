import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const initialForm = {
        email: "",
        password: ""
    }

    const [form, setForm] = useState(initialForm)

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "100vh" }}>
                <div className="card p-4" style={{ minWidth: 350 }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Type your email here"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Login</button>

                        <div className=" text-center mt-3">
                            Don't have an account? <Link to="/register">Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}