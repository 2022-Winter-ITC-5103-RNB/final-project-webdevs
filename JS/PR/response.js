function getBotResponse(input) {
   //simple response
    if (input == "contact") {
        return "support.studyInCanada@gmail.com";
    } 
    else if (input == "How are you?") {
        return "I'm great. What about you sir";
    } 
    else if (input == "help") {
        return "How can i help you sir? Please type your issue.";
    }
    else if (input == "hello" || input=="hi") {
        return "Hello there!";
    } 
    else if (input == "goodbye" || input == "bye" ) {
        return "Talk to you later!";
    }
    else {
        return "Try asking something else!";
    }
}