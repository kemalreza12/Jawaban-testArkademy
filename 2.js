function emailValidity(username) {
    var regex = /^([a-z\0-9\.|_]){8,12}$/;
    return regex.test(username);
}
if(emailValidity("johnsmith20")) {
    console.log("return true");
} else {
    console.log("return false");    
}

function passwordValidity(password) {
    var regex = /^([^]{1}\w+\d{1})$/;
    return regex.test(password);
}
if(passwordValidity("-malreza9")) {
    console.log("return true");
} else {
    console.log("return false");    
}
