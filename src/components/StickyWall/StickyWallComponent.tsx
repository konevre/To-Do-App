import React from "react";

import HeaderComponent from "../Header/HeaderComponent";

import StickerListComponent from "./StickerListComponent";

const StickyWallComponent: React.FC = () => {
    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title="Sticky Wall" number={0} />
            <StickerListComponent />
        </div>
    );
};

export default StickyWallComponent;
