import React from "react";
import { useSearchParams } from "react-router-dom";

import HeaderComponent from "../Header/HeaderComponent";
import TaskBlock from "../Task/TaskBlock";

const SearchComponent: React.FC = () => {
    const [searchParams] = useSearchParams();

    // TODO - если пустой то ниче не выдавать??
    const result = searchParams.get("q");

    return (
        <>
            <HeaderComponent title={result} number={0} />
            <TaskBlock filter="search" />
        </>
    );
};

export default SearchComponent;
