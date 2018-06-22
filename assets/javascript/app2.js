

// Global variables

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, incorrect = 0, unanswered = 0, counter = 4, timer;

var guessed = [];


var questions = [
    ["What Band Sang a Song called 'Robert De Niro's Waiting'?", "The Go-Go's", "The Eurythmics", "Bananarama", "The Bangles", "C", "Bananarama", "https://media.giphy.com/media/lb1T46PtSt8Gs/giphy.gif"],
    ["What Band Sang the Song, 'The Love Shack'?", "The B-52's", "Prince", "Madonna", "Mister Mister", "A", "The B-52's", "https://media.giphy.com/media/xXeMyPdYlROX6/giphy.gif"],
    ["Who is the singer of the song 'Super Freak'?", "George Michael", "A-ha", "The Pet Shop Boys", "Rick James", "D", "Rick James", "https://media.giphy.com/media/dFqP7vPEzKoM0/giphy.gif"],
    // ["What song sampled 'Van Halen's Jaime's Cryin'?", "Sabotage", "Wild Thing", "Jump", "Black Coffee in Bed", "B", "Wild Thing"],
    ["Who is the lead singer of The Go-Go's?", "Martha Davis", "Belinda Carlisle", "Martha Reed", "Martha Walsh", "B", "Belinda Carlisle", "https://media.giphy.com/media/Y418mApQbIKGc/giphy.gif"],
    ["What Missing Person's Album contained 'Walking in L.A'?", "Late Nights Early Days", "Sprint Session M", "Color in Your Life", "Riot in English", "B", "Sprint Session M", "https://media.giphy.com/media/6TBPWMybOlZLi/giphy.gif"],
    // ["What country were 'Men at Work' from?", "England", "The United States", "Australia", "Denmark", "C", "Australia"],
    ["What was Huey Lewis' bands name?", "The Report", "The Friendship Band", "The Vandrells", "The News", "D", "The News", "https://media.giphy.com/media/15WDwH91gcCWs/giphy.gif"],
    ["Who sang the song, 'Alone'?", "Madonna", "Lionel Richie", "Heart", "Billy Joel", "C", "Heart", "https://media.giphy.com/media/QbRXrHi6QBge4/giphy.gif"]
    // [ "What record was on the Number 1 list the longest in 1982?", "Asia", "Freeze Frame", "Beauty and the Beat", "For Those About to Rock We Salute You", "A", "Asia"]



];
// function for restart button at end of questions
function anotherStartButton() {
    $("#anotherStart").on("click", function(){
        renderQuestion();
        checkAnswer();  
    });
}


// trying to display image... currently not working
var imgCorrect = questions[pos][7];



// create a timer

function countDown() {
    console.log(pos);
    var element = $("#timer");
    element.html("<br><br><span class='counts'>" + counter + "</span> <br> seconds to answer</p>");
    counter--;


    if (counter < 1) {
        $("#anotherStart").hide();
        
        $("#containerTest").hide();
        $("#answerStatus").show().attr("src", imgCorrect);
        $("#answerStatus").show().text("The correct answer was " + questions[pos][6]);

        unanswered++
        pos++

        clearInterval(timer);
        console.log("line 58" + clearInterval);
        setTimeout(renderQuestion, 2000);
    } else if (pos === questions.length - 1) {

        $("#containerTest").empty();
        clearTimeout(checkAnswer);
        clearTimeout(renderQuestion);
        //stops the timer
        //clearInterval(timer);
        console.log("line 67" + clearInterval);
        $("#answerStatus").show().text("The correct answer was " + questions[pos][6]);
        $("#img1").show().attr("src", imgCorrect);
        $("#timer").hide();
        $("#anotherStart").show();
        return $("#answerStatus").show().text("You answered " + correct + " questions correctly, you had " + incorrect + " incorrect,  and  " + unanswered + " unanswered questions.");
        anotherStartButton();
        

    };
}

// show correct answer
// advance to next question
// add to unanswered questions

// create the questions
function renderQuestion() {
    counter = 4;
    $("#anotherStart").hide();
    $("#img1").hide();
    $("#gameInfo").hide();
    $("#startMe").hide();
    $("#answerStatus").hide();
    $("#containerTest").show();
    

    timer = setInterval(countDown, 1000);
    test = $("#test");
    for (var i = 0; i > questions.length; i++) {
        if (questions[pos][i] >= questions.length) {

            // $("#answerStatus").hide();
            // var endgame = $("#gameInfo").show().text("Correct answers :" + correct + "Incorrect answers " + incorrect + "Unanswered " + unanswered);
            // return endgame;
            pos++;


        }

        // show total correct, total incorrect and total unanswered in HTML
        // show start over button
        // if user clicks startover then
        //pos = 0;

        //renderQuestion();
        // without reloading the game
    }
    
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




function checkAnswer() {
    $(".choices").on("click", function () {
        var choices = $(this).attr("value");




        for (var i = 0; i < choices.length; i++) {
            if (pos === questions.length - 1) {

                $("#containerTest").hide();
                clearTimeout(checkAnswer);
                $("#img1").show().attr("src", imgCorrect);
                $("#timer").hide();
                $("#anotherStart").show();
                return $("#answerStatus").show().text("You answered " + correct + " questions correctly, you had " + incorrect + " incorrect,  and  " + unanswered + " unanswered questions.");
                anotherStartButton();
                
                
            }
            else if (choices[i] === questions[pos][5]) {
                console.log(guessed);
                choice = choices[i].value;
                correct++;
                $("#containerTest").hide();
                $(".anotherDiv").show();
                $("#answerStatus").show();
                $("#img1").show().attr("src", imgCorrect);
                $("#answerStatus").text("You guessed correctly!");
                // var imgDiv = $("<div class='anotherDiv'>");
                // var imgURL = questions[pos][7];
                // var image = $("<img>").attr("src", imgURL);
                // imgDiv.append(image);


            }
            else {
                $("#containerTest").hide();
                $("#answerStatus").show();
                $(".anotherDiv").show();
                $("#img1").show().attr("src", imgCorrect);
                $("#answerStatus").text("Nope not that one, the correct answer was " + questions[pos][6]);
                // var imgDiv = $("<div class='anotherDiv'>");
                // var imgURL = questions[pos][7];
                // var image = $("<img>").attr("src", imgURL);
                // imgDiv.append(image);
                incorrect++
            }
        }

        pos++;
        clearInterval(timer);
        //setTimeout(checkAnswer, 3000);
        setTimeout(renderQuestion, 2000);

    });
}
// if (hasAnswered === false) {
//     clearInterval(timer);
//     setTimeout(renderQuestion, 5000);
//     unanswered++;
// }
// function startGame() {
//     $(".containerQuestions").hide();
//     $
// };



$(document).ready(function () {
    $("#anotherStart").hide();
    $("#answerStatus").hide();
    $("#startMe").show();
    $("button#trouble").on("click", function () {
        renderQuestion();
        checkAnswer();
    });





});














