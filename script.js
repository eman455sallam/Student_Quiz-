window.addEventListener("load", function () {

    /*name validation */

    let userName = this.document.getElementById("user_name");
    userName.focus();

    let nameSpan = this.document.getElementById("name_span");

    userName.addEventListener('blur', function () {
        if (!isNameValid(userName.value)) {
            userName.focus();
            userName.select();
            nameSpan.style.display = "block";
        } else {
            nameSpan.style.display = "none";
            userName.classList.add("greenColor");
        }
    });//end name blur

    /*Password validation */
    let userPass = this.document.getElementById("user_password");
    let passSpan = this.document.getElementById("pass_span");
    userPass.addEventListener('blur', function () {
        if (!isPassValid(userPass.value)) {
            userPass.focus();
            userPass.select();
            passSpan.style.display = "block";
        } else {
            passSpan.style.display = "none";
            userPass.classList.add("greenColor");
        }
    });//end password blur

    /*Password confirm validation */
    let userPassConf = this.document.getElementById("Password_confirm");
    let passConfSpan = this.document.getElementById("pass_conf_span");
    userPassConf.addEventListener('blur', function () {
        if (userPass.value != userPassConf.value) {
            userPassConf.focus();
            userPassConf.select();
            passConfSpan.style.display = "block";
        } else {
            passConfSpan.style.display = "none";
            userPassConf.classList.add("greenColor");
        }
    });//end password blur



    /*email validation */
    let userEmail = this.document.getElementById("user_email");
    let emailSpan = this.document.getElementById("email_span");

    userEmail.addEventListener('blur', function () {
        if (!isEmailValid(userEmail.value)) {
            userEmail.focus();
            userEmail.select();
            emailSpan.style.display = "block";

        } else {
            emailSpan.style.display = "none";
            userEmail.classList.add("greenColor");
        }
    });//end email blur

    


    /*start submit validation */
    this.document.forms[0].addEventListener('submit', function (event) {
        if (!isNameValid(userName.value) || !isPassValid(userPass.value) || !isEmailValid(userEmail.value) ) {
            event.preventDefault();

        }
        

    });/*end submit validation */



    /*start clear validation */
    this.document.forms[0].addEventListener('reset', function (data) {
        if (!confirm("Do you want to cancle ?")) {
            data.preventDefault();
        }

    }); /*end clear validation */

});



/* Regular expression functions and another validation functions*/
/*1-name regular expression */
function isNameValid(user_name) {
    let nameRegEx = /^[a-zA-Z]{4,18}$/;
    let trimInput=user_name.trim();
    return trimInput.match(nameRegEx);//return null or object
}
/*2-email validation */
function isEmailValid(email) {
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailRegEx);//return null or object

}
/*3- password validation */
function isPassValid(pass) {
    let passRegEx = /^[1-9]{4,10}$/;
    return pass.match(passRegEx);//return null or object
}
/*4-gender validation*/

function isGenderValid() {


    var isNotChecked = true;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isNotChecked = false
        } return isNotChecked;

    }


}








