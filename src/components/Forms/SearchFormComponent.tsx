import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFormComponent: React.FC = () => {
    const navigate = useNavigate();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchQuery = e.currentTarget.search.value;
        if (searchQuery) {
            navigate(`/search?q=${searchQuery}`);
            e.currentTarget.search.value = "";
        }
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
