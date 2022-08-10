// Get user input
function getValues(){

    // make alert invisible
    document.getElementById("alert").classList.add("invisible");

    //get user string from page
    let userString = document.getElementById("userString").value;

    // check for a palindrome
    let returnObj = checkForPalindrome(userString);

    // display our message to the screen
    displayMessage(returnObj);
}

// check if string is a palindrome
function checkForPalindrome(userString){

    // need to remove all special characters and convert all char to lower case for comparison

    // convert to lowercase
    userString = userString.toLowerCase();

    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    // build the reverse string
    for(let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    }

    // if the reverse string is the same as userstring it is a palindrome
    if(revString == userString){

        // set the msg, and also change classes to alter color of alert box to green
        returnObj.msg = "Well Done! You entered a Palindrome!"
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("msg").classList.remove("redText");
        document.getElementById("msg").classList.add("greenText");
        document.getElementById("alertHeader").classList.remove("redText");
        document.getElementById("alertHeader").classList.add("greenText");
        
    }
    else{

        // set the msg, and also change classes to alter color of alert box to red
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").classList.remove("greenText");
        document.getElementById("msg").classList.add("redText");
        document.getElementById("alertHeader").classList.remove("greenText");
        document.getElementById("alertHeader").classList.add("redText");
    }

    returnObj.reversed = revString;

    return returnObj;

}

// display a message to the user
function displayMessage(returnObj){

    // display the resulting info to the user
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reversed}`
    document.getElementById("alert").classList.remove("invisible");

}