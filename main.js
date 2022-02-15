onload = () => {
    const qns = [{
            question: "Java is the programming language created at?",
            a: "Google",
            b: "Microsoft",
            c: "Oracle",
            d: "Sun Microsystems",
            correct: "d"
        },

        {
            question: "The following code results the consecutive alert in a sequence of ?    alert( alert(3) || alert(4) || 5);",
            a: "3  4  5",
            b: "4  5",
            c: "3  5",
            d: "none of the above",
            correct: "a"
        },
        {
            question: "What are the different types of classes in C#?",
            a: "Partial, Sealed, Abstract, Static",
            b: "Sealed, Private, Static",
            c: "Abstract, Inherited, Sealed",
            d: "Static, abstract, Sealed, private",
            correct: "a"
        },

        {
            question: "Which of the following resemble the statement 'Object Oriented Programming' ?",
            a: "using blade templates",
            b: "framework based web creation",
            c: "Objects and respective classes",
            d: "Promises and asynchronous function",
            correct: "c"
        },

        {
            question: "Which of the following is not a programming language?",
            a: "Lua",
            b: "Html",
            c: "F#",
            d: "Php",
            correct: "b"
        },

        {
            question: "Select the most used programming language in 2021",
            a: "Python",
            b: "Javascript",
            c: "Java",
            d: "C#",
            correct: "a"
        },

        {
            question: "Symbol in javascript is of which data type?",
            a: "primitive",
            b: "number",
            c: "non-primitive",
            d: "none of the above",
            correct: "a"
        }
    ]

    const quiz = document.getElementById("quiz")
    const quest = document.getElementById("question")
    const $answer = document.querySelectorAll(".answer")

    const a_txt = document.getElementById("a_txt")
    const b_txt = document.getElementById("b_txt")
    const c_txt = document.getElementById("c_txt")
    const d_txt = document.getElementById("d_txt")

    const submit_btn = document.getElementById("submit")


    let currentQuiz = 0
    let score = 0;

    loadQuestion()

    function loadQuestion() {
        deselectAnswers()

        const currentQns = qns[currentQuiz]

        quest.innerText = currentQns.question
        a_txt.innerText = currentQns.a
        b_txt.innerText = currentQns.b
        c_txt.innerText = currentQns.c
        d_txt.innerText = currentQns.d

    }

    function getSelected() {

        let answer = undefined

        $answer.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id
            }
        })

        return answer
    }

    function deselectAnswers() {
        $answer.forEach((answerEl) => {
            answerEl.checked = false
        })
    }

    function result() {
        /*
        quiz.innerHTML = `<h2>You have scored ${score}/${qns.length}.</h2> `
        */
        swal(
            "Good job!",
            `You have scored ${score}/${qns.length}`,
            "success")
    }

    function remove() {
        const undo = document.querySelector(".main")
        const heading = document.querySelector(".heading")
        undo.style.display = "none"
        heading.style.display = "none"
    }

    submit_btn.addEventListener("click", () => {

        const answer = getSelected()

        if (answer) {
            if (answer === qns[currentQuiz].correct) {
                score++
            }

            currentQuiz++

            currentQuiz < qns.length ? loadQuestion() : result()
            if (currentQuiz === qns.length) {
                remove()
            }

        }
    })

    submit_btn.style.transform = "translateY(40px)"


}