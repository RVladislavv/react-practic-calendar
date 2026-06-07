export const dateFormat = (el: Date) => {
    const day = el.getDate();        // День месяца (1-31)
    const month = el.getMonth() + 1; // Месяц (0-11, поэтому добавляем 1)
    const year = el.getFullYear();   // Четырехзначный год
    return `${day}/${month}/${year}`;
}