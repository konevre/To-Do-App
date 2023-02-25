import React from "react";

import BaseListAndTagsComponent from "../components/ListAndTags/BaseListAndTagsComponent.jsx";
import LayoutComponent from "../components/Layout/LayoutComponent.jsx";

const TagsPage = () => {
    return (
        <LayoutComponent>
            <BaseListAndTagsComponent filter="tag" />
        </LayoutComponent>
    );
};

export default TagsPage;
