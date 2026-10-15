function daysBetweenDates(date1, date2) {
    // Hint 1 & 2 onujayi, timezone ba daylight saving time er error avoid korar jonno UTC timestamp use korlam
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Duita date er milliseconds er difference ber kore setake total days-e convert korlam
    const diffTime = Math.abs(Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate()) - Date.UTC(d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate()));
    
    // Milliseconds ke days-e convert korar jonno (1000ms * 60s * 60m * 24h) diye divide korlam ar absolute whole day return korlam
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}