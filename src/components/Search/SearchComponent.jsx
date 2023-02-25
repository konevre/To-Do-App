import React from "react";
import { useSearchParams } from "react-router-dom";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

const SearchComponent = () => {
    const [searchParams] = useSearchParams();
    const result = searchParams.get("q");

    return (
        <>
            <HeaderComponent title={result} number={0} />
            <TaskBlock filter="search" name={result} />
        </>
    );
};

export default SearchComponent;
