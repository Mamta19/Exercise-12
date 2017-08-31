function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];

    //If first name is empty. Add it to the array
    var firstName = getValue("firstName");
    if (firstName.length === 0) {
        messages.push('First Name is Required');
    }



    //If last name is empty. Add it to the array
    var lastName = getValue("lastName");
    if (lastName.length === 0) {
        messages.push('Last Name is Required');
    }

    //Email is empty. Add it to the array
    var email = getValue("email");
    if (email.length === 0) {
        messages.push('Email is Required');


    }

    document.getElementById('error-list').innerHTML= messages;


    //Loop through array


    var html = "</ul>"
    for (var i = 0; i < messages.length; i++) {
        html = html + '<li>' + messages[i]
        '</li>'
        html = html + '</ul>'
    }

    //Create javascript object for the user
    var me = {
        firstName: "Mamta",
        lastName: "Kumari",
    
    fullName: function () {
        return this.firstName + "  " + this.lastName;
    }
    };


    //log the user object to the console
console.log(me);

    //Check to see if everything is valid

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var now = new Date();
    console.log(now);
    //Make the alert box.

if(message.length === 0){
    alert(now);
}

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}