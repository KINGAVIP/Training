import React from "react";

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between bg-green-200 shadow-md w-[100vw] top-0  p-4 ">
            <h1 className="text-xl">Navbar</h1>
            <div className="flex flex-row items-center">
                {
                    [...Array(4)].map((link, index) => (
                        <p className="text-gray-800 px-2 mx-2" key={index}>Link 1</p>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;