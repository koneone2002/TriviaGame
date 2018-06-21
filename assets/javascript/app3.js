// create a timer

function countDown() {
    var element = $("#timer");
    element.text("You have " + counter + " seconds to answer");
    if (counter < 1) {
        //counter = 11;
        clearInterval(timer);
        setTimeout(renderQuestion, 5000);
        // showCorrectAnswer();
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
    [ "What Band Sang a Song called 'Robert De Niro's Waiting'?", "The Go-Go's", "The Eurythmics", "Bananarama", "The Bangles", "C", "Bananarama", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQzGoS8vdY486hsbzYnnxjBk2JY542Vxgjw_AdpznMwXcupCy"  ],
    [ "What Band created the Song, 'The Love Shack'?", "The B-52's", "Prince", "Madonna", "Mister Mister", "A", "The B-52's", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTagXn9jVkAdWEu6E9Rx3se796sxVG0peDTLqznouJDSeMA0AIA" ],
    [ "Who is the singer of the song 'Super Freak'?", "George Michael", "A-ha", "The Pet Shop Boys", "Rick James", "D", "Rick James", "https://i.scdn.co/image/91a421d8354f6efc961bfec9b5fe7afc4e30e2cb" ],
    [ "What song sampled 'Van Halen's Jaime's Cryin'?", "Sabotage", "Wild Thing", "Jump", "Black Coffee in Bed", "B", "Wild Thing", "https://images-na.ssl-images-amazon.com/images/I/71ANkSHNYJL._SL1200_.jpg" ],
    [ "Who is the lead singer of The Motels?", "Martha Davis", "Martha Stewart", "Martha Reed", "Martha Walsh", "A", "Martha Davis", "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/The_Motels_Shock.jpg/220px-The_Motels_Shock.jpg" ],
    [ "What Missing Person's Album contained 'Walking in L.A'?", "Late Nights Early Days", "Sprint Session M", "Color in Your Life", "Riot in English", "B", "Sprint Session M", "https://i.ytimg.com/vi/-RqHBfUTIKY/hqdefault.jpg" ]
    // [ "What country were 'Men at Work' from?", "England", "The United States", "Australia", "Denmark", "C", "Australia"],
    // [ "What was Huey Lewis' Bands name?", "The Report", "The Friendship Band", "The Vandrells", "The News", "D", "The News"],
    // [ "Who sang a song called 'Alone'?", "Madonna", "Lionel Richie", "Heart", "Billy Joel", "C", "Heart"],
    // [ "What record was on the Number 1 list the longest in 1982?", "Asia", "Freeze Frame", "Beauty and the Beat", "For Those About to Rock We Salute You", "A", "Asia"]

];

function renderQuestion() {
    // ending phase logic
    // if (pos >= questions.length){
    //     // show total correct, total incorrect and total unanswered in HTML
    //     // show start over button
    //     // if user clicks startover then
    //     pos = 0;
    //     //renderQuestion();
    //     // without reloading the game
    //     // stops all 
    //     // return showResults():
    // }
    counter = 10;
    timer = setInterval(countDown, 1000);
    //test = $("#test");
    
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
    //pos++;
    

}
function checkAnswer() {

    $(".choices").on("click", function () {
        var choices = $(this).attr("value");
        
        for (var i = 0; i < choices.length; i++) {
            if (choices[i] === questions[pos][5]) {
                console.log(guessed);
                choice = choices[i].value;
                correct++;
                //show([pos][7];
                
            }
            else {
                alert("nope not that one, the correct answer was " + questions[pos][6]);
                incorrect++
            }
        }
        
        pos++;
        clearInterval(timer);
        setTimeout(renderQuestion, 5000);
        //showResults();
        //countDown(10, "#timer");

    });



}
$(document).ready(function () {
    renderQuestion();
    
    checkAnswer();

});











