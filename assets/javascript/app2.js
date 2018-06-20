// create a timer

function countDown() {
    var element = $("#timer");
    element.text("You have " + counter + " seconds to answer");
    if (counter < 1) {
        counter = 10;
        clearInterval(timer);
        setTimeout(renderQuestion, 5000);
        
        // show correct answer
        // advance to next question
        // add to unanswered questions
    }
    counter--;
    // timer = setTimeout('countDown(' + secs + ', "' + "#timer" + '")', 1000);

}

// countDown(10, "#timer");

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, incorrect = 0, unanswered = 0, counter = 10, timer;
// var valueA = $("#testa").text(chA);
// var valueB = $("#testb").text(chB);
// var valueC = $("#testc").text(chC);
// var valueD = $("#testd").text(chD);
var guessed = [];

var questions = [
    [ "What Band Sang a Song called 'Robert De Niro's Waiting'?", "The Go-Go's", "The Eurythmics", "Bananarama", "The Bangles", "C", "Bananarama"  ],
    [ "What Band Sang created the Song, 'The Love Shack'?", "The B-52's", "Prince", "Madonna", "Mister Mister", "A", "The B-52's" ],
    [ "Who is the singer of the song 'Super Freak'?", "George Michael", "A-ha", "The Pet Shop Boys", "Rick James", "D", "Rick James" ],
    [ "What song sampled 'Van Halen's Jaime's Cryin'?", "Sabotage", "Wild Thing", "Jump", "Black Coffee in Bed", "B", "Wild Thing" ],
    [ "Who is the lead singer of The Motels?", "Martha Davis", "Martha Stewart", "Martha Reed", "Martha Walsh", "A", "Martha Davis" ],
    [ "What Missing Person's Album contained 'Walking in L.A'?", "Late Nights Early Days", "Sprint Session M", "Color in Your Life", "Riot in English", "B", "Sprint Session M" ],
    [ "What country were 'Men at Work' from?", "England", "The United States", "Australia", "Denmark", "C", "Australia"],
    [ "What was Huey Lewis' Bands name?", "The Report", "The Friendship Band", "The Vandrells", "The News", "D", "The News"],
    [ "Who sang a song called 'Alone'?", "Madonna", "Lionel Richie", "Heart", "Billy Joel", "C", "Heart"],
    [ "What record was on the Number 1 list the longest in 1982?", "Asia", "Freeze Frame", "Beauty and the Beat", "For Those About to Rock We Salute You", "A", "Asia"]

];

function renderQuestion() {
    counter = 10;
    timer = setInterval(countDown, 1000);
    test = $("#test");
    if (pos >= questions.length){
        // show total correct, total incorrect and total unanswered in HTML
        // show start over button
        // if user clicks startover then
        pos = 0;
        renderQuestion();
        // without reloading the game
    }
    // $("#test_status").text("Question " + (pos + 1) + " of " + questions.length);
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
            if (choices[i] === questions[pos][5]) {
                console.log(guessed);
                choice = choices[i].value;
                correct++;
                alert("you guessed it");
                
            }
            else {
                alert("nope not that one, the correct answer was " + questions[pos][6]);
                incorrect++
            }
        }
        
        pos++;
        clearInterval(timer);
        setTimeout(renderQuestion, 5000);
        //countDown(10, "#timer");

    });



}
$(document).ready(function () {
    renderQuestion();
    //countDown(10, "#timer");
    checkAnswer();

});











