import useLuxon from "./useLuxon";

const useCalendarToday = () => {
    const { now } = useLuxon();
    const todayTitle: string = now.toFormat("d LLLL");

    return { todayTitle } as const;
};

export default useCalendarToday;
