'use client'
import { useContext } from "react"
import DisplayContext from "./State/Context"
import Link from "next/link"

export default function Login() {
    const display = useContext(DisplayContext)

    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        console.log(customerData)
    }

    return (
            <div className="min-h-[90vh] my-24">
                <div className={`form-container ${display.show ? "bg-slate-100" : "bg-slate-800"} dark:bg-slate-800`}>
                    <h2 className={display.show ? "text-[#212529]" : "text-[#83a5be]"}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="email" placeholder="Email" name="Email" required />
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="password" placeholder="Password" name="password" required minLength={7} />
                        <button type="submit">Login</button>
                        <div className="links flex flex-col" >
                            <a href="Forgot" className="mb-[17%]" >Forgot password?</a>
                            <Link href="/SignUp">Not registered?
                                <span className="text-blue-500">Create a new account</span></Link>
                        </div>
                    </form>
                </div>
            </div>
    )
}