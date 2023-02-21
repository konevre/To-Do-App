import useLuxon from "./useLuxon.js";

const useCalendarToday = () => {
    const { now } = useLuxon();
    const todayTitle = now.toFormat("d LLLL");

    return { todayTitle };
};

export default useCalendarToday;
