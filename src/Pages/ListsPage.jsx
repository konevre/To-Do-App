import React from "react";

import BaseListAndTagsComponent from "../components/ListAndTags/BaseListAndTagsComponent.jsx";
import LayoutComponent from "../components/Layout/LayoutComponent.jsx";

const ListsPage = () => {
    return (
        <LayoutComponent>
            <BaseListAndTagsComponent filter="list" />
        </LayoutComponent>
    );
};

export default ListsPage;