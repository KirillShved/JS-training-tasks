try {
    var month = parseInt(prompt("Enter the number of month 1 to 12:"));
    var day = parseInt(prompt("Enter the number of day in month 1 to 31:"));
    var year = 2017;
    var day_in_month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if (isNaN(day || month) || day < 1 || month < 1 || month > 12 || day > day_in_month[month]) {
        throw new Error("You try to input incorrect data");
    }

    var day_code = Math.floor((14 - month) / 12);
    var year_code = year - day_code;
    var month_code = month + 12 * day_code - 2;
    var week_day = (7000 + day + year_code + Math.floor(year_code / 4) - Math.floor(year_code / 100) + Math.floor(year_code / 400) + Math.floor((31 * month_code) / 12)) % 7;
    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    alert("Your day: " + day_names[week_day] + ".");
} catch (err) {
    alert(err);
}
