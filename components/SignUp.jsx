'use client'
import { useContext } from "react"
import DisplayContext from "./State/Context"

export default function SignUp() {
    const display = useContext(DisplayContext)
    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        console.log(customerData)
    }


    return (
        <>
            <div className="min-h-[90vh] py-24">
                <div className={`form-container ${display.show ? "bg-slate-100" : "bg-slate-800"}`}>
                    <h2 className={display.show ? "text-[#212529]" : "text-[#83a5be]"}>Sign up to DreamWatch</h2>
                    <form onSubmit={handleSubmit}>
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="email" placeholder="Email" name="Email" required />
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="text" placeholder="Username" name="name" required />
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="password" placeholder="Password" name="password" required />
                        <input className={display.show ? "bg-slate-200" : "bg-slate-900"}
                            type="password" placeholder="Confirm Password" required />
                        <label>
                            <input type="checkbox" name='checkbox' required /> You agree to our terms of service
                        </label>
                        <button type="submit"   >Sign up</button>
                        <div className="links">
                            <a href="#">Login</a> • <a href="#">Resend Verification Email</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}