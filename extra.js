window.onload = function() {
    
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let greeting = "";

    // Log current location
    console.log("Current path: " + window.location.pathname);

    // Check if current location is the quiz page - don't show alert on quiz page
    if (window.location.href.indexOf("quiz.html") === -1) {

        if (hours < 12) {
        greeting = "Good morning!";
        } else if (hours < 18) {
        greeting = "Good afternoon!";
        } else {
        greeting = "Good evening!";
        }
    
    
    let message = greeting + "\n Current date is: " + currentDate.toLocaleDateString() +
                  "\n This website contains information about our team and our projects.";

    
    alert(message);
   }
};

function changeBackgroundColor() {
    let paragraph = document.getElementById("myParagraph");
    paragraph.style.backgroundColor = "lightpink"; 
}


// QUIZ

let score = 0;
let currentQuestionIndex = 0;
let username = "";

// Quiz questions and answers
const questions = [
    {
        question: "What is the main theme of this website?",
        options: ["Technology", "Music", "Travel", "Art"],
        correctAnswer: 2
    },
    {
        question: "What is the best season for traveling?",
        options: ["Summer", "Winter", "Spring", "All seasons"],
        correctAnswer: 3
    },
    {
        question: "Which of the following countries is landlocked?",
        options: ["Austria", "Italy", "Greece", "Turkey"],
        correctAnswer: 0
    },
    {
        question: "What is the traditional food you should try when visiting Japan?",
        options: ["Sushi", "Pizza", "Falafel", "Savory pie"],
        correctAnswer: 0
    },
    {
        question: "What is the color of the website's logo?",
        options: ["Green", "Brown", "Red", "Orange"],    
        correctAnswer: 1
    },
    {
        question: "Which of the following cities is known for the Angel's Gate and its ancient history?",
        options: ["Rome", "Istanbul", "Paris", "Munich"],
        correctAnswer: 1
    },   
    {
        question: "Which country is famous for the La Tomatina festival, where participants throw tomatoes at each other?",
        options: ["Italy", "Greece", "Portugal", "Spain"],
        correctAnswer: 3
    },    
    {
        question: "Which Australian city is famous for the Sydney Opera House and Sydney Harbour Bridge?",
        options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the national drink of Russia?",
        options: ["Sake", "Vodka", "Whiskey", "Raki"],
        correctAnswer: 1
    },
    {
        question: "Which Turkish city is known for Hagia Sophia and the Bosphorus?",
        options: ["Istanbul", "Ankara", "Izmir", "Eskişehir"],
        correctAnswer: 0
    }
   
];


// Starts the quiz when you click the button
function startQuiz() {
    // Get username and remove any extra spaces
    username = document.getElementById("username").value.trim();
    
    // If no username is entered, show alert
    if (username === "") {
        alert("Please enter your name.");
        return; // Stops the function if username is empty
    }

    // Show quiz container and hide username input
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("username").disabled = true;
    document.querySelector("button").disabled = true;

    // Show the first question
    displayQuestion();
}

// Display the current question and its options
function displayQuestion() {
    // Get the current question from the list
    const currentQuestion = questions[currentQuestionIndex];

    // Set the question text
    document.getElementById("question-text").textContent = currentQuestion.question;

    // Create HTML for the answer options
    let user_answers = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        user_answers += `
            <input type="radio" name="answer" value="${i}" id="answer${i}">
            <label for="answer${i}">${currentQuestion.options[i]}</label><br>
        `;
    }

    // Put the options in the "answers" div
    document.getElementById("answers").innerHTML = user_answers;
}

// Go to the next question
function nextQuestion() {
    // Find the selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    // If no answer is selected, show alert
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return; // Stops the function if no answer is selected
    }

    // Get the index of the selected answer
    const correct_answer = parseInt(selectedAnswer.value);

    // If the selected answer is correct, increase the score
    if (correct_answer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    // Go to the next question
    currentQuestionIndex++;

    // If there are more questions, show the next one
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // If no more questions, show the result
        showResult();
    }
}

// Show the final score when the quiz ends
function showResult() {
    // Hide the quiz and show the result container
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    // Show the score and username
    document.getElementById("score").textContent = score + " / " + questions.length;
    document.getElementById("user-name").textContent = username;
}