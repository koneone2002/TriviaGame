

// Global variables

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, incorrect = 0, unanswered = 0, counter = 4, timer, imgCorrect;

var guessed = [];


var questions = [
    ["What Band Sang a Song called 'Robert De Niro's Waiting'?", "The Go-Go's", "The Eurythmics", "Bananarama", "The Bangles", "C", "Bananarama", "https://media.giphy.com/media/lb1T46PtSt8Gs/giphy.gif"],

    ["What Band Sang the Song, 'The Love Shack'?", "The B-52's", "Prince", "Madonna", "Mister Mister", "A", "The B-52's", "https://media.giphy.com/media/xXeMyPdYlROX6/giphy.gif"],

    ["Who is the singer of the song 'Super Freak'?", "George Michael", "A-ha", "The Pet Shop Boys", "Rick James", "D", "Rick James", "https://media.giphy.com/media/dFqP7vPEzKoM0/giphy.gif"],

    ["Who is the lead singer of The Go-Go's?", "Martha Davis", "Belinda Carlisle", "Martha Reed", "Martha Walsh", "B", "Belinda Carlisle", "https://media.giphy.com/media/Y418mApQbIKGc/giphy.gif"],

    ["What Missing Person's Album contained 'Walking in L.A'?", "Late Nights Early Days", "Sprint Session M", "Color in Your Life", "Riot in English", "B", "Sprint Session M", "https://media.giphy.com/media/6TBPWMybOlZLi/giphy.gif"],

    ["What was Huey Lewis' bands name?", "The Report", "The Friendship Band", "The Vandrells", "The News", "D", "The News", "https://media.giphy.com/media/15WDwH91gcCWs/giphy.gif"],

    ["Who sang the song, 'Alone'?", "Madonna", "Lionel Richie", "Heart", "Billy Joel", "C", "Heart", "https://media.giphy.com/media/QbRXrHi6QBge4/giphy.gif"]
];

// create a timer

function countDown() {
    var element = $("#timer");
    element.html("<br><br><span class='counts'>" + counter + "</span> <br> seconds to answer</p>");
    counter--;


    if (pos !== 6 && counter < 1) {
        $("#anotherStart").hide();
        
        $("#containerTest").hide();
        $("#img1").show().attr("src", imgCorrect);
        $("#answerStatus").show().text("The correct answer was " + questions[pos][6]);
        clearInterval(timer);
        setTimeout(function(){
          unanswered++
          pos++
          //console.log("line 58" + clearInterval);
          renderQuestion()
        }, 1000)
    }
    if (pos === 6 && counter < 1) {
        $("#containerTest").hide();
        clearInterval(timer);
        console.log("line 67"+ imgCorrect);
        $("#answerStatus").show().text("The correct answer was " + questions[pos][6]);
        $("#img1").show().attr("src", imgCorrect);
        $("#timer").hide();
        $("#anotherStart").show();
        $("#answerStatus").show().text("You answered " + correct + " questions correctly, you had " + incorrect + " incorrect,  and  " + unanswered + " unanswered questions.");
    };

}

        


// create the questions
function renderQuestion() {
    imgCorrect = questions[pos][7];
    counter = 4;
    $("#anotherStart").hide();
    $("#img1").hide();
    $("#gameInfo").hide();
    $("#startMe").hide();
    $("#answerStatus").hide();
    $("#containerTest").show();
    
    // create a timer
    timer = setInterval(countDown, 1000);
    
    
    
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    $("#test").html("<h3>" + question + "</h3>");
    valueA = $("#testa").text(chA);
    valueB = $("#testb").text(chB);
    valueC = $("#testc").text(chC);
    valueD = $("#testd").text(chD);

}


$(document).ready(function () {
    $("#anotherStart").hide();
    $("#answerStatus").hide();
    $("#startMe").show();
    $("button#trouble").on("click", function () {
        renderQuestion();
        
    });
    // function for restart button
    $("#anotherStart").on("click", function() {
        pos = correct = incorrect = unanswered = 0;
        $("#timer").show();
        renderQuestion();

    });
    
    $(".choices").on("click", function () {
        console.log("pooossss", pos)
        var choices = $(this).attr("value");

        for (var i = 0; i < choices.length; i++) {
            if (pos === questions.length - 1) {

                $("#containerTest").hide();
                $("#img1").show().attr("src", imgCorrect);
                $("#timer").hide();
                $("#anotherStart").show();
                $("#answerStatus").show().text("You answered " + correct + " questions correctly, you had " + incorrect + " incorrect,  and  " + unanswered + " unanswered questions.");
                pos = 0;
                clearInterval(timer);
            }
            else if (choices[i] === questions[pos][5]) {
                
                $("#containerTest").hide();
                $(".anotherDiv").show();
                $("#answerStatus").show();
                $("#img1").show().attr("src", imgCorrect);
                $("#answerStatus").text("You guessed correctly!");
                clearInterval(timer);
                setTimeout(function() {
                    correct++;
                    pos++;
                    
                    renderQuestion()
                }, 2000);
                }
                else {
                    $("#containerTest").hide();
                    $("#answerStatus").show();
                    $(".anotherDiv").show();
                    $("#img1").show().attr("src", imgCorrect);
                    $("#answerStatus").text("Nope not that one, the correct answer was " + questions[pos][6]);
                    clearInterval(timer);
                    setTimeout(function() {
                        incorrect++;
                        pos++;
                        
                        renderQuestion()
                    }, 2000);
                }
            }
        });
                    





});














