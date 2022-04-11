function getBotResponse(input) {
   //simple Gratting
    if (input == "Contact") {
        return "support.studyabroad@gmail.com";
    } else if (input == "How are you?") {
        return "I'm great. What about you sir";
    } else if (input == "help") {
        return "How can i help you sir? Please type your issue.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye" ) {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}