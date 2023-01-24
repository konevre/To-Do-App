export const formatDate = (date, format) => {
    if (date === "" || !date) return "";
    if (format === "yyyy-MM-dd") {
        const [day, month, year] = date.split("-");
        return [`20${year}`, month, day].join("-");
    } else if (format === "dd-MM-yy") {
        const [year, month, day] = date.split("-");
        return [day, month, year.slice(2)].join("-");
    }
};
