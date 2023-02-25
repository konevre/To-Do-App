import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFormComponent = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const searchQuery = e.target.search.value;
        navigate(`/search?q=${searchQuery}`);
        e.target.search.value = "";
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                name="search"
                type="text"
                placeholder="Search"
                className="mt-5 flex h-10 w-full flex-row rounded-lg border border-neutral-300 bg-neutral-200 p-3.5 text-sm"
            />
        </form>
    );
};

export default SearchFormComponent;
