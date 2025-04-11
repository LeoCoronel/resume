const formatDate = (date: Date): string => {
    // Forzamos a tratar la fecha en su contexto local
    const year = date.getFullYear();
    const month = date.getMonth(); // Meses base 0 (0 = enero)

    // Array con los nombres de los meses
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Retornamos el mes y año formateados
    return `${months[month]} ${year}`;
};

export {
    formatDate
}