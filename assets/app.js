var questionsAnswered = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


// A test to see if app.js was linked correctly console.log("link test");

var questionsArray = [{
    question: "What is a group of cats called?",
    choices: ["A cluster", "A crowd", "A crowder", "A clowder", "A class"],
    values: [false, false, false, true, false]
}, {
    question: "What food commonly given to cats is actually bad for them?",
    choices: ["Milk", "Tuna", "Chicken", "Salmon", "Mice"],
    values: [true, false, false, false, false]
}, {
    question: "From where do cats sweat?",
    choices: ["Their ears", "Their tail", "Their tongue", "Their paws", "Their nose"],
    values: [false, false, false, true, false]
}, {
    question: "About how much of their lives to cats spend sleeping?",
    choices: ["50%", "40%", "70%", "80%", "60%"],
    values: [false, false, true, false, false]
}, {
    question: "Who was the first cartoon cat?",
    choices: ["Garfield", "Tom (Tom and Jerry)", "Felix the Cat", "Sylvester", "Hello Kitty"],
    values: [false, false, true, false, false]
}];

function createAnswerButtons() {

    for (var i = 0; i < questionsArray[questionsAnswered].choices.length; i++) {
        var answerButton = $("<button>");
        answerButton.text(questionsArray[questionsAnswered].choices[i]);
        answerButton.addClass("answer-button btn");
        answerButton.attr("value", questionsArray[questionsAnswered].values[i]);
        answerButton.attr("answerName", questionsArray[questionsAnswered].choices[i]);
        $("#quiz-buttons").append(answerButton);
    }

};

function endConditions() {

    var resetButton = $("<button>");
    resetButton.text("Try Again");
    resetButton.addClass("btn reset-button");

    $("#quiz-questions").empty();
    $("#quiz-buttons").empty();
    $("#quiz-questions").append('<h2>Correct</h2>', correctAnswers, '<h2>Incorrect</h2>', incorrectAnswers, '<br><br><img src="assets/cat-win.jpg" width=300><br><br>', resetButton);

    $(".reset-button").on("click", function () {
        questionsAnswered = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        $("#quiz-questions").empty();
        gameLogic();
        console.log("test");
    });
};



function gameLogic() {

    $("#quiz-questions").append(questionsArray[questionsAnswered].question);
    createAnswerButtons();
    // a test to see if the game logic function was executing correctly console.log("execution test");

    console.log("click test");
    console.log("correct: " + correctAnswers);
    console.log("incorrect: " + incorrectAnswers)
    console.log("questions answered:" + questionsAnswered);

    $(".answer-button").on("click", function () {

        if (questionsAnswered >= questionsArray.length - 1 && $(this).attr("value") === "true") {
            correctAnswers++;
            endConditions();
        }

        else if (questionsAnswered >= questionsArray.length - 1) {
            incorrectAnswers++;
            endConditions();
        }

        else if ($(this).attr("value") === "true") {
            correctAnswers++;
            questionsAnswered++;
            $("#quiz-questions").empty();
            $("#quiz-buttons").empty();
            gameLogic();
        }

        else {
            incorrectAnswers++;
            questionsAnswered++;
            $("#quiz-questions").empty();
            $("#quiz-buttons").empty();
            gameLogic();
        }
    })
};





gameLogic();



