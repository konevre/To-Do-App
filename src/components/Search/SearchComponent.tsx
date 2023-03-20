import React from "react";
import { useSearchParams } from "react-router-dom";

import HeaderComponent from "../Header/HeaderComponent";
import TaskBlockComponent from "../Task/TaskBlockComponent";

const SearchComponent: React.FC = () => {
    const [searchParams] = useSearchParams();
    const result = searchParams.get("q");

    return (
        <>
            <HeaderComponent title={result} number={0} />
            <TaskBlockComponent filter="search" />
        </>
    );
};

export default SearchComponent;
