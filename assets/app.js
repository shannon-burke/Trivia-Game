var currentQuestion = 1;
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

    for (var i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
        var button = $("<button>");
        button.text(questionsArray[currentQuestion].choices[i]);
        button.addClass("answer-button");
        button.attr("value", questionsArray[currentQuestion].values[i]);
        button.attr("answerName", questionsArray[currentQuestion].choices[i]);
        $("#quiz-buttons").append(button);
    }

};

function endConditions() {
    $("#quiz-result").text("test");
};

function gameLogic() {



    $("#quiz-questions").append(questionsArray[currentQuestion].question);
    createAnswerButtons();
    // a test to see if the game logic function was executing correctly console.log("execution test");

    console.log("click test");
    console.log("correct: " + correctAnswers);
    console.log("incorrect: " + incorrectAnswers)
    console.log("current question:" + currentQuestion);

    $(".answer-button").on("click", function () {

        if (currentQuestion > questionsArray.length - 2) {
            $("#quiz-questions").empty();
            $("#quiz-buttons").empty();
            endConditions();
        }

        else if ($(this).attr("value") === "true") {
            correctAnswers++;
            currentQuestion++;
            $("#quiz-questions").empty();
            $("#quiz-buttons").empty();
            gameLogic();
        }

        else {
            incorrectAnswers++;
            currentQuestion++
            $("#quiz-questions").empty();
            $("#quiz-buttons").empty();
            gameLogic();
        }


    })

};





gameLogic();



