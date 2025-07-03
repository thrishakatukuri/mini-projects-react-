import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="flex justify-between p-3 rounded bg-yellow-500 m-2">
            <div className="text-3xl font-bold ml-8">
            <Link to="/" className="hover:text-white">Thrisha</Link>
            </div>
            <div className="space-x-10 mr-8 text-xl flex items-center">
                <Link to="/Home"        className=" font-bold  hover:text-white">Home</Link>
                <Link to="/About"   className=" font-bold  hover:text-white">About</Link>
                <Link to="/Contact" className=" font-bold  hover:text-white">Contact</Link>
                <Link to="/" className=" font-bold  hover:text-white">Registor</Link>

            </div>
        </div>
        </>
    );
};

export { Header };
