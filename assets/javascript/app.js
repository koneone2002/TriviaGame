// create start button 
// start button has a start state
// on click start state becomes true
// start page disappears
// new div shows
// timer starts

// hide the giphy's
// declare the questions as objects
var q1 = {
    question: "What Band Sang a Song called 'Robert De Niro's Waiting'?",
    answers: ["The Go-Go's", "The Eurythmics","Bananarama","The Bangles"]

};
var q2 = {
    question: "What Band Sang created the Song, 'The Love Shack'?",
    answers: ["The B-52's", "Prince", "Madonna", "Mister Mister"]

};
var q3 = {
    question: "Who is the singer of the song 'Super Freak'?",
    answers: ["George Michael", "A-ha", "The Pet Shop Boys", "Rick James"]

};
var q4 = {
    question: "What song sampled 'Van Halen's Jaime's Cryin'?",
    answers: ["Sabotage", "Wild Thing", "Jump", "Black Coffee in Bed"]

};


var wins = 0;
var losses = 0;
var unanswered = 0;
var isStarted = false;
var canClick = false;
var isSelected = false;


$(document).ready(function () {
    $(".image").hide();
    
});

var reset = function () {
    $(".image").hide();
    wins = "";
    losses = "";
    unanswered = "";
    isStarted = true;
    canClick = false;
}
// function createQuestions1() {
//     $(".leadQuestion").text(q1.question);
//     $("#guess1").text(q1.answers[0]).addClass("big");
//     $("#guess2").text(q1.answers[1]).addClass("big");
//     $("#guess3").text(q1.answers[2]).addClass("big");
//     $("#guess4").text(q1.answers[3]).addClass("big");
//     };
//     createQuestions1();
// function createQuestions2() {
// $(".leadQuestion").text(q2.question);
// $("#guess1").text(q2.answers[0]).addClass("big");
// $("#guess2").text(q2.answers[1]).addClass("big");
// $("#guess3").text(q2.answers[2]).addClass("big");
// $("#guess4").text(q2.answers[3]).addClass("big");
// };
// createQuestions2();

canClick = true;
if(canClick === true) {
    selectAnswer();

} else { 
    setTimeout(reset, 2000);
}
function selectAnswer() {
    $("li#guess1").on("click", function () {
        $("#img1").show();
        $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
        $(".guess").hide();
        losses++;
        canClick = false;
        isSelected = true;
        setTimeout(reset, 5000);
    });
    $("li#guess2").on("click", function () {
        $("#img2").show();
        $(".guess").hide();
        $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
        losses++;
        canClick = false;
        isSelected = true;
        setTimeout(reset, 5000);
    });
    $("li#guess3").on("click", function () {
        $("#img3").show();
        $(".guess").hide();
        $(this).replaceWith("<h2 class='winner'>You're right! You Win!!!</h2>");

        wins++;
        canClick = false;
        isSelected = true;
        setTimeout(reset, 5000);
    });
    $("li#guess4").on("click", function () {
        $("#img4").show();
        $(".guess").hide();
        $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
        losses++;
        canClick = false;
        isSelected = true;
        setTimeout(reset, 5000);
    });
    if (isSelected === false) {
        unanswered++;
    }
}

selectAnswer();

// reset();
