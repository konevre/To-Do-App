import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/welcome/welcome_logo.png";

const Welcome = () => {
    return (
        <div className="h-full flex flex-col lg:flex-row">
            <div className="flex justify-center items-center h-3/5 sm:h-3/6 lg:h-full bg-neutral-900 rounded-2xl lg:basis-1/2">
                <img className="h-3/4 lg:h-1/2" src={logo} alt="logo" />
            </div>
            <div className="flex flex-col grow justify-center items-center lg:basis-1/2">
                <div className="sm:w-3/4">
                    <h1 className="text-2xl sm:text-5xl text-neutral-900 font-semibold">Productive Mind</h1>
                    <div className="mt-2 text-base sm:text-2xl sm:mt-10 text-neutral-600 font-medium">
                        With only the features you need, Organic Mind is customized for individuals seeking
                        a stress-free way to stay focused on their goals, projects, and tasks.
                    </div>
                    <NavLink to="/today">
                        <button className="w-full h-12 sm:h-16 mt-8 sm:mt-10 bg-amber-300 rounded-lg text-base sm:text-2xl font-semibold cursor-pointer">Get Started</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default Welcome;