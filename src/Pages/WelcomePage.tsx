import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/welcome/welcome_logo.png";

const WelcomePage: React.FC = () => {
    return (
        <div className="flex h-full flex-col gap-y-5 p-4 sm:p-6 lg:flex-row">
            <div className="flex h-3/5 items-center justify-center rounded-2xl bg-neutral-900 sm:h-3/6 lg:h-full lg:basis-1/2">
                <img className="h-3/4 lg:h-1/2" src={logo} alt="logo" />
            </div>
            <div className="flex grow flex-col items-center justify-center lg:basis-1/2">
                <div className="w-full lg:w-3/4">
                    <h1 className="text-2xl font-semibold text-neutral-900 lg:text-5xl">
                        Productive Mind
                    </h1>
                    <div className="mt-2 text-base font-medium text-neutral-600 sm:mt-10 lg:text-2xl">
                        With only the features you need, Organic Mind is
                        customized for individuals seeking a stress-free way to
                        stay focused on their goals, projects, and tasks.
                    </div>
                    <NavLink to="/today">
                        <button className="mt-8 h-12 w-full cursor-pointer rounded-lg bg-amber-300 text-base font-semibold sm:mt-10 sm:h-16 sm:text-2xl">
                            Get Started
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
