try {
    var userFloors = prompt ("Enter the number of floors 1 to 25:");
    var userEntrances = prompt ("Enter the number of entrances 1 to 10:");
    var userApartments = prompt ("Enter the number of apartments 1 to 20:");
    var userNumberOfApartment = prompt ("Enter the number of you apartment:");

    if (isNaN (userFloors, userEntrances, userApartments, userNumberOfApartment)) {
        throw new Error("Data are not a numbers.");
    } else if (userFloors || userEntrances || userApartments || userNumberOfApartment <= 0) {
        throw new Error("The data should be more 0.");
    } else {
        var sumApartments = userFloors * userApartments;
        var newSum = sumApartments;
        var entrance = 0;

        for (var i = 0; i < userEntrances; i++) {
            entrance++;
            if(newSum >= userNumberOfApartment) {
                alert ("You entrance: " + entrance);
                break;
            }
            newSum = newSum + sumApartments;
        }
    }
} catch (err) {
    alert (err);
}
