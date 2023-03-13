import React from "react";

import HeaderComponent from "../Header/HeaderComponent.jsx";

import StickerListComponent from "./StickerListComponent.jsx";

const StickyWallComponent = () => {
    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title="Sticky Wall" number={0} />
            <StickerListComponent />
        </div>
    );
};

export default StickyWallComponent;
