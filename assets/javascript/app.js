// create start button 
// start button has a start state
// on click start state becomes true
// start page disappears
// new div shows

// create a timer


// hide the giphy's

// declare the questions as objects
// the last index is the correct answer -  answers.[4]
var q1 = {
    question: "What Band Sang a Song called 'Robert De Niro's Waiting'?",
    answers: ["The Go-Go's", "The Eurythmics", "Bananarama", "The Bangles", "Bananarama"]

};
var q2 = {
    question: "What Band Sang created the Song, 'The Love Shack'?",
    answers: ["The B-52's", "Prince", "Madonna", "Mister Mister", "The B-52's"]

};
var q3 = {
    question: "Who is the singer of the song 'Super Freak'?",
    answers: ["George Michael", "A-ha", "The Pet Shop Boys", "Rick James", "Rick James"]

};
var q4 = {
    question: "What song sampled 'Van Halen's Jaime's Cryin'?",
    answers: ["Sabotage", "Wild Thing", "Jump", "Black Coffee in Bed", "Wild Thing"]

};


var wins = 0;
var losses = 0;
var unanswered = 0;
var isStarted = false;
var canClick = false;
var isSelected = false;
var banner = "";
var guessed = [];
function countDown(secs, elem) {
    var element = $("#timer");
    element.text("You have " + secs + " seconds to answer");
    if (secs < 1) {
        clearTimeout(timer);
        createNextPage();
        


    }
    secs--;
    var timer = setTimeout('countDown(' + secs + ', "' + elem + '")', 1000);

}
function createQuestions1() {
    canClick = true;
    $(".leadQuestion").text(q1.question);
    $("#guess1").text(q1.answers[0]).addClass("big");
    $("#guess2").text(q1.answers[1]).addClass("big");
    $("#guess3").text(q1.answers[2]).addClass("big");
    $("#guess4").text(q1.answers[3]).addClass("big");
};

function createQuestions2() {
    canClick = true;
    $(".leadQuestion").text(q2.question);
    $("#guess1").text(q2.answers[0]).addClass("big");
    $("#guess2").text(q2.answers[1]).addClass("big");
    $("#guess3").text(q2.answers[2]).addClass("big");
    $("#guess4").text(q2.answers[3]).addClass("big");
};
function createNextPage() {
    $("banner").remove();
    reset();

    createQuestions2();
    // countDown(10, "#timer");

}
function myFun() {
   
};

function reset() {
    //$(".image").hide();
    $(".guess").show();
    // $(banner).hide();
    // countDown(10, "#timer");
    wins = "";
    losses = "";
    unanswered = "";
    isStarted = true;
    canClick = false;
    //guessed = [];
}

$(document).ready(function () {
    $(".image").hide();

    // countDown(10, "#timer");

    // });




    canClick = true;
    if (canClick === true) {
        countDown(10, "#timer");
        selectAnswer();

    } else {
        // countDown(10, "#timer");
        // setTimeout(reset, 2000);
    }


    function selectAnswer() {
        $(".guess").on("click", function () {
            var answer = $(this);
            // var guessed = [];
            guessed.push(answer);
            console.log(guessed);
            if (guessed === q1.answers[4] || guessed === q2.answers[4] || guessed === q3.answers[4] || guessed === q4.answers[4]) {
                $(".guess").hide();
                var banner = $(this)
                banner.replaceWith("<h2 class='winner'>You're right! You Win!!!</h2>");

                wins++;
                canClick = false;
                isSelected = true;
                setInterval(myFun, 5000);


            } else if (guessed !== q1.answers[4] || guessed !== q2.answers[4] || guessed !== q3.answers[4] || guessed !== q4.answers[4]) {
                $(".guess").hide();
                var banner = $(this)
                banner.replaceWith("<h2 class='loser'>You're wrong!</h2>");
                losses++;
                canClick = false;
                isSelected = true;
                // setInterval(createNextPage, 5000);
                setInterval(myFun, 5000);
            };
            // Interval which will switch to the next question at some interval

        });
    }
    // } if (isSelected === false) {
    //     unanswered++;
    // }

    // $("li#guess1").on("click", function () {
    //     $("#img1").show();
    //     $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
    //     $(".guess").hide();
    //     losses++;
    //     canClick = false;
    //     isSelected = true;
    //     setTimeout(reset, 5000);
    // });
    // $("li#guess2").on("click", function () {
    //     $("#img2").show();
    //     $(".guess").hide();
    //     $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
    //     losses++;
    //     canClick = false;
    //     isSelected = true;
    //     setTimeout(reset, 5000);
    // });
    // $("li#guess3").on("click", function () {
    //     $("#img3").show();
    //     $(".guess").hide();
    //     $(this).replaceWith("<h2 class='winner'>You're right! You Win!!!</h2>");

    //     wins++;
    //     canClick = false;
    //     isSelected = true;
    //     setTimeout(reset, 5000);
    // });
    // $("li#guess4").on("click", function () {
    //     $("#img4").show();
    //     $(".guess").hide();
    //     $(this).replaceWith("<h2>Nope, You Lose! The answer is " + q1.answers[2] + "</h2>");
    //     losses++;
    //     canClick = false;
    //     isSelected = true;
    //     setTimeout(reset, 5000);
    // });
    // if no question is selected add 1 to the unanswered category



    createQuestions1();
    selectAnswer();

    // reset();


    // Create Timer to show on page which will count down what ever setInterval is set to 

});

