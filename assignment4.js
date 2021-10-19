
function validateFirstname() {
    var firstName = document.getElementById("fname");
    var errorDiv = document.getElementById("userFirstnameError");

    try {
         if (firstName.value.length < 2) {
            throw "First Name should be atleast 2 characters long!"
        }
        firstName.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        firstName.style.background = "rgb(255,233,233)";
    }
}

function validateLastname() {
    var lastName = document.getElementById("lname");
    var errorDiv = document.getElementById("userLastnameError");

    try {
        if (lastName.value.length < 2) {
            throw "Last Name should be atleast 2 characters long!";
        }
        lastName.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        lastName.style.background = "rgb(255,233,233)";
    }
}
function validateAddress() {
    var address = document.getElementById("address");
    var errorDiv = document.getElementById("addressError");

    try {
        if (address.value === "") {
            throw "Please provide an address"
        }
        address.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";

    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        address.style.background = "rgb(255,233,233)";
    }

}
function validateCity() {
    var city = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");

    try {
        if (city.value === "") {
            throw "Please provide your city!"
        }
        city.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";

    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        city.style.background = "rgb(255,233,233)";
    }

}
function validatePostalCode() {
    var canadianPostalColde = /^([A-Z]\d[A-Z][-]?\d[A-Z]\d)$/;
    var userInput = document.getElementById("postalCode");
    var errorDiv = document.getElementById("postalCodeError");

    try {
        if (canadianPostalColde.test(userInput.value) === false) {
            throw "Please enter a valid Canadian Postal code!";
        }
        userInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";

    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        userInput.style.background = "rgb(255,233,233)";
    }
}

function validateProvince() {
    var province = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    var provinceFormat = /^QC|qc|Qc|qC|ON|on|On|oN|MN|mn|Mn|mN|SK|sk|sK|Sk|AB|ab|Ab|aB|BC|bc|Bc|bC*$/;
    try {
       
        if (provinceFormat.test(province.value) === false) {
            throw "Province must be either QC, ON, MN, SK, AB or BC"
        }
        province.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        province.style.background = "rgb(255,233,233)";
    }
}



function validateAge(){
    var age = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");

    try {
        if (age.value < 18) {
            throw "Minimum age required is 18 years atleast!"
        }
        age.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        age.style.background = "rgb(255,233,233)";
    }
}
function validatePassword() {
    var passwordInput = document.getElementById("password");
    var confirmInput = document.getElementById("confirm");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (/.{6,}/.test(passwordInput.value) === false) {
            throw "Minimum password length must be at least 6 characters";
        }
        else if (passwordInput.value.localeCompare(confirmInput.value) !== 0) {
            throw "Passwords do not match";
        }
        else if (/[a-z]/.test(passwordInput.value) === false || /[A-Z]/.test(passwordInput.value) === false) {
            throw "Password must contain at least one uppercase and one lowercase alphabet";
        }
        else if (/\d/.test(passwordInput.value) === false) {
            throw "Password must contain at least one number";
        }
        else if (/[!@#_]/.test(passwordInput.value) === false) {
            throw "Password must contain at least one of the following symbols: ! @ # _";
        } 
        passwordInput.style.background = "";
        confirmInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        passwordInput.style.background = "rgb(255,233,233)";
        confirmInput.style.background = "rgb(255,233,233)";
    }
}
function validateEmail() {
    var userEmail = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailFormat = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;

    try {
        if (emailFormat.test(userEmail.value) === false) {
            throw "Please provide a valid email address";
        }
        userEmail.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        userEmail.value = userEmail.value.toLowerCase();
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        userEmail.style.background = "rgb(255,233,233)";
    }

}
function submitForm() {
    validateFirstname();
    validateLastname();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateAge();
    validatePassword();
    validateEmail();
    validateProvince();
}
var submit = document.getElementById("submit");
if (submit.addEventListener) {
    submit.addEventListener("click", submitForm, false);
}

function submitMessage() {
    alert("Thanks for registering with our website. Your customer record was created successfully.");
}

