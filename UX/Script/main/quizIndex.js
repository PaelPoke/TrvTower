import { Quiz } from './quiz.js';  // Import the Quiz class
import { Minion } from './minion.js'; // Import Minion class

// Create an instance of the Quiz class
const quiz = new Quiz();

// Create some minions
const minions = [
    new Minion("Goblin", 100),
    new Minion("Orc", 150),
    new Minion("Troll", 200)
];

// Add 10 questions using the addNewQuiz method
quiz.addNewQuiz("What is the capital of France?", ["Berlin", "Madrid", "Paris"], 'C');
quiz.addNewQuiz("What is 2 + 2?", ["3", "4", "5"], 'B');
quiz.addNewQuiz("Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter"], 'B');
quiz.addNewQuiz("What is the largest mammal?", ["Blue Whale", "Elephant", "Giraffe"], 'A');
quiz.addNewQuiz("Who wrote 'Romeo and Juliet'?", ["Shakespeare", "Hemingway", "Tolkien"], 'A');
quiz.addNewQuiz("What is the boiling point of water?", ["90°C", "100°C", "120°C"], 'B');
quiz.addNewQuiz("Which is the smallest continent?", ["Africa", "Australia", "Europe"], 'B');
quiz.addNewQuiz("What is the square root of 64?", ["6", "8", "10"], 'B');
quiz.addNewQuiz("Who painted the Mona Lisa?", ["Van Gogh", "Da Vinci", "Picasso"], 'B');
quiz.addNewQuiz("What is the speed of light?", ["300,000 km/s", "150,000 km/s", "1,000 km/s"], 'A');

// Bind option buttons to the class's optionButton method
document.getElementById("option1").onclick = () => quiz.optionButton('A');
document.getElementById("option2").onclick = () => quiz.optionButton('B');
document.getElementById("option3").onclick = () => quiz.optionButton('C');

// Function to display minions in the UI
function displayMinions() {
    const minionsContainer = document.querySelector('.minions');
    minionsContainer.innerHTML = '';  // Clear existing minions
    
    minions.forEach(minion => {
        if (minion.isAlive()) {  // Only display alive minions
            const minionDiv = document.createElement('div');
            minionDiv.classList.add('minion');
            minionDiv.innerHTML = `${minion.name} - Health: ${minion.health}`;
            
            // Create image with the class "minion"
            const minionImg = document.createElement('img');
            minionImg.classList.add('minion');  // Use the same 'minion' class
            minionImg.src = 'UI/Image/enemy/minion.png';  // The image path as requested
            minionImg.alt = minion.name;  // Set the alt attribute to the minion's name
            minionImg.id = `${minion.name.toLowerCase()}-img`;  // Unique ID for each minion image
            minionDiv.appendChild(minionImg);
            
            minionsContainer.appendChild(minionDiv);
        }
    });
}

// Modified die function to hide the specific minion's image (not all)
Minion.prototype.die = function() {
    this.health = 0;
    console.log(`${this.name} has died!`);
    
    // Find the specific minion image and hide it by ID
    const minionImg = document.getElementById(`${this.name.toLowerCase()}-img`);
    if (minionImg) {
        minionImg.style.display = 'none';  // Hide the image of the minion that died
    }
};

// Attack logic (attacks one minion)
function attackMinion() {
    const aliveMinions = minions.filter(minion => minion.isAlive());
    if (aliveMinions.length > 0) {
        const randomMinion = aliveMinions[Math.floor(Math.random() * aliveMinions.length)];
        randomMinion.die();  // Kill the minion
        displayMinions();  // Update the minions display
        alert(`${randomMinion.name} has been attacked and killed!`);
    } else {
        alert("No minions left to attack!");
    }
}

// Ultimate Attack logic (kills all minions)
function ultimateAttack() {
    minions.forEach(minion => minion.die());
    displayMinions();  // Update the minions display
    alert('All minions have been killed by your Ultimate Attack!');
    
    // Hide all minion images in the HTML
    minions.forEach(minion => {
        const minionImg = document.getElementById(`${minion.name.toLowerCase()}-img`);
        if (minionImg) {
            minionImg.style.display = 'none';  // Hide the image of the minion that died
        }
    });
}

// Modified function to show quiz popup (ensure correct answer results in minion disappearing)
function showQuizPopup(selectedOption) {
    const quizPopup = document.getElementById('quiz-popup');
    const questionText = document.getElementById('quiz-question');
    const quizAnswerInput = document.getElementById('quiz-answer');
    const submitQuizButton = document.getElementById('submit-quiz');
    const closeQuizButton = document.getElementById('close-quiz');

    // Set a random question
    const randomQuestion = "What is 2 + 2?";  // Example simple question
    questionText.textContent = randomQuestion;

    // Show the quiz popup
    quizPopup.style.display = 'block';

    submitQuizButton.onclick = function () {
        const userAnswer = quizAnswerInput.value.trim();
        if (userAnswer === '4') {  // Correct answer
            alert('Correct! Attack will proceed.');

            // Check which button was clicked
            if (selectedOption === 'Attack') {
                attackMinion();  // Trigger attack if answer is correct
            } else if (selectedOption === 'Ultimate') {
                ultimateAttack();  // Trigger ultimate attack if answer is correct
            }

            quizPopup.style.display = 'none';  // Close the quiz popup
        } else {
            alert('Incorrect answer! Try again.');
        }
    };
}

// Attack Button (show quiz and attack one minion)
document.querySelector('.attack-button').addEventListener('click', function() {
    showQuizPopup('Attack');  // Show quiz popup before attacking
});

// Ultimate Button (kill all minions)
document.querySelector('.ultimate-button').addEventListener('click', function() {
    showQuizPopup('Ultimate');  // Show quiz popup before ultimate
});

// Regeneration Button (regen player HP)
document.querySelector('.regen-button').addEventListener('click', function() {
    const regenAmount = 50;  // Example regen amount
    player.health += regenAmount;
    player.renderStats();  // Update player stats
});
