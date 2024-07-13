function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Format the time as HH:MM:SS AM/PM
    const amPmTime = `${padZero(get12HourFormat(hours))}:${padZero(minutes)}:${padZero(seconds)} ${getAmPm(hours)}`;

    console.log(`Time (HH:MM:SS): ${formattedTime}`);
    console.log(`Time (HH:MM:SS AM/PM): ${amPmTime}`);
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function get12HourFormat(hours) {
    return hours % 12 || 12;
}

function getAmPm(hours) {
    return hours >= 12 ? 'PM' : 'AM';
}

// Update the time every second
setInterval(getCurrentTime, 1000);
