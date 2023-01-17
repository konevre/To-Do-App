import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "../Pages/Welcome.jsx";
import TodayComponent from "../components/Today/TodayComponent.jsx";
import MenuComponent from "../components/Menu/Menu.jsx";

const App = () => {
    return (
        <Router>
            <div className="relative h-full sm:flex">
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/today" element={<TodayComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
