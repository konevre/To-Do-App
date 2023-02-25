import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useFilterListAndTags from "../../hooks/useFilterListAndTags.js";
import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

// const ListOfTagsComponent = () => {
//     const params = useParams();
//     const [num, setNum] = useState(0);

//     const { tags } = useGetTags();
//     const tagName = tags.find((item) => item.id === +params.id).name;

//     return (
//         <div>
//             <HeaderComponent title={tagName} number={num} />
//             <TaskBlock filter={"list"} id={params.id} setNum={setNum} />
//         </div>
//     );
// };

const BaseListAndTagsComponent = ({ filter }) => {
    const params = useParams();
    const [num, setNum] = useState(0);

    const array = useFilterListAndTags(filter);

    const name = array.find((item) => item.id === +params.id).name;

    return (
        <div>
            <HeaderComponent title={name} number={num} />
            <TaskBlock filter={filter} id={params.id} setNum={setNum} />
        </div>
    );
};

export default BaseListAndTagsComponent;
