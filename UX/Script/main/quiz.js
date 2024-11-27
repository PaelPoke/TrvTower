// quiz.js
export class Quiz {
    constructor() {
        this.buttonChange = document.querySelectorAll('#option1, #option2, #option3');
        this.answerOption = false;
        this.quizValue = 0;
        this.quizData = [];
    }

    // Function to add new quizzes
    addNewQuiz(question, options, correctAnswer) {
        this.quizData.push({ question, options, correctAnswer });
    }

    // Empty the quiz display
    emptyQuiz() {
        document.getElementById("question").innerHTML = '';
        document.getElementById("option").innerHTML = '';
        document.querySelector('.quiz-container').style.display = 'none';
    }

    // Display the question and options based on quizValue
    getQuestion() {
        this.quizValue = Math.floor(Math.random() * this.quizData.length);
        const currentQuiz = this.quizData[this.quizValue];
        if (!this.answerOption) {
            document.querySelector('.quiz-container').style.display = 'flex';
            document.getElementById("question").innerHTML = currentQuiz.question;
            document.getElementById("option").innerHTML = `
                A) ${currentQuiz.options[0]} B) ${currentQuiz.options[1]} C) ${currentQuiz.options[2]}
            `;
        }
        console.log("Selected Question Index:", this.quizValue);
    }

    // Handles the button logic
    optionButton(selectedOption) {
        switch (this.answerOption) {
            case false:
                this.buttonChange.forEach((button, index) => {
                    button.innerHTML = ['A', 'B', 'C'][index];
                });
                this.getQuestion();
                this.answerOption = true;
                break;

            case true:
                const currentQuiz = this.quizData[this.quizValue];
                if (currentQuiz) {
                    if (selectedOption === currentQuiz.correctAnswer) {
                        alert("Correct!");
                    } else {
                        alert("Wrong!");
                    }
                }

                this.buttonChange.forEach((button, index) => {
                    button.innerHTML = ['Attack', 'Regen', 'Ultimate'][index];
                });
                this.answerOption = false;
                this.emptyQuiz();
                break;
        }
    }
}
