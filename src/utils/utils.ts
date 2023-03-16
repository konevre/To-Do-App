// export const formatDate = (date, format) => {
//     if (date === "" || !date) return "";
//     if (format === "yyyy-MM-dd") {
//         const [day, month, year] = date.split("-");
//         return [`20${year}`, month, day].join("-");
//     } else if (format === "dd-MM-yy") {
//         const [year, month, day] = date.split("-");
//         return [day, month, year.slice(2)].join("-");
//     }
// };

export const countHours = (start: number, end: number) => {
    const range = [];
    for (let i = start; end > i; i++) {
        range.push(i);
    }
    return range;
};

export const isNewCol = (hours: number[][], eventHours: number[]) => {
    let index = -1;
    for (let i = 0; i < hours.length; i++) {
        if (!hours[i].some((hour) => eventHours.includes(hour))) {
            index = i;
            break;
        }
    }
    return index;
};
