import React from "react";

import ListOfListsComponent from "../components/Lists/ListOfListsComponent.jsx";
import LayoutComponent from "../components/Layout/LayoutComponent.jsx";

const ListsPage = () => {
    return (
        <LayoutComponent>
            <ListOfListsComponent />
        </LayoutComponent>
    );
};

export default ListsPage;
