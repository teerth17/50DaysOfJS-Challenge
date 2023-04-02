/*
Ask the Bob Instructions
Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.
*/

const isUpper = (string) => {
    return !/[a-z]/.test(string) & /[A-z]/.test(string);
}

function hey(message) {
	// Code here
let letterString = "";
    splitMessage = message.split("");
    splitMessage.forEach(character =>{
        if(/[a-zA-Z]/.test(character)){
            letterString+=character;
        }
    } )

    if(isUpper(letterString) && message.trim().charAt(message.length -1) == "?"){
        return "Calm down, I know what I'm doing!";
    }
    else if(isUpper(letterString)){
        return "Whoa, chill out!";
    }
    else if(message.trim().charAt(message.length -1) == "?"){
        return ("Sure");
    }
    else if(message = ""){
        return ("Fine. Be that way!");
    }
    return "Whatever.";
    
}
console.log(hey('How are you?'))
