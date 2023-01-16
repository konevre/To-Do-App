import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "../Pages/Welcome.jsx"
import TodayComponent from "../components/Today/TodayComponent.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/today" element={<TodayComponent/>}/>
            </Routes>
        </Router>
    )
};

export default App;