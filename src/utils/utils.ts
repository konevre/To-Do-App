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
