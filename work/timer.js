// timer.js
function getMidnight(addDay = 0) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + addDay);
    return date.getTime();
}

function getWeekDate(status) {
    const date = new Date(2019, 04, 02);
    const monday = new Date(2019, 04, 02);
    const sunday = new Date(2019, 04, 02);
    monday.setDate(date.getDate() - (date.getDay() - 1));
    if (status === 'previous') {
        monday.setDate(monday.getDate() - 7);
    } 
    sunday.setDate(monday.getDate() + 6);
    return {
        startTime: monday,
        endTime: sunday,
        nowTime: date
    };
}
const time = new Date();
console.log(time, 'time');
const weekDate = getWeekDate('now');
console.log(weekDate, 'week date');
function getMonthDate(status) {
    const startTime = new Date();
    const endTime = new Date();
    startTime.setDate(1);
    if (status === 'previous') {
        startTime.setMonth(startTime.getMonth() - 1);
    }
    endTime.setMonth(startTime.getMonth() + 1);
    endTime.setDate(0);

    return {
        startTime: startTime,
        endTime: endTime
    };
}
