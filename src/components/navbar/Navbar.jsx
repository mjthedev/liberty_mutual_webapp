import React from "react"
import logo from '../../assets/liberty-mutual-insurance-logo-vector.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="h-[96px] w-full flex bg-[#ffd000]">
            <div className="flex w-1/4 bg-transparent items-center justify-end"><img id="logo" src={logo} alt="" /></div>
            <div className="flex w-2/4 bg-transparent border items-center ">
                <Link className="navbar-items bg-transparent ml-24">Shop Insurance</Link>
                <Link className="navbar-items bg-transparent ml-20">Claims</Link>
                <Link className="navbar-items bg-transparent ml-20">Customer Support</Link>
            </div>
            <div className="flex w-1/4 bg-transparent border items-center">
                <Link className="navbar-items bg-transparent ml-20 text-xs">Search</Link>
                <Link className="navbar-items bg-transparent ml-5 text-xs">Log In</Link>
            </div>
        </div>
        )
    }
