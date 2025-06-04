const questions = [
    {
        id : 1,
        question : "Which of these places was once called New Amsterdam?",
        a : "Jakarta",
        b : "London",
        c : "San Francisco",
        d : "New York City",
        answer : "New York City",
        answerKey: "d"
    },
    {
        id : 2,
        question : "Which of these places was once called Constantinople?",
        a : "Jerusalem",
        b : "Athens",
        c : "Cairo",
        d : "Istanbul",
        answer : "Istanbul",
        answerKey: "d"
    },{
        id : 3,
        question : "Which of these places was once called Peking??",
        a : "Beijing",
        b : "Shanghai",
        c : "Hong Kong",
        d : "Seoul",
        answer : "Beijing",
        answerKey: "a"
    },{
        id : 4,
        question : "Which of these places was once called New Leningrad?",
        a : "Moscow",
        b : "St. Petersburg",
        c : "Warsaw",
        d : "Kyiv",
        answer : "St. Petersburg",
        answerKey: "b"
    },{
        id : 5,
        question : "Which of these places was once called New Bombay?",
        a : "Bengaluru",
        b : "Kolkata",
        c : "Mumbai",
        d : "Delhi",
        answer : "Mumbai",
        answerKey: "c"
    },{
        id : 6,
        question : "Which of these places was once called Persia?",
        a : "Iraq",
        b : "Iran",
        c : "Jordan",
        d : "Saudi Arabia",
        answer : "Iran",
        answerKey: "b"
    },{
        id : 7,
        question : "Which of these places was once called New Siam?",
        a : "South Korea",
        b : "Indonesia",
        c : "Bangladesh",
        d : "Thailand",
        answer : "Thailand",
        answerKey: "d"
    },
]

const hTow = document.querySelector("h2")
//console.log(hTow)
const nextBtn = document.querySelector(".next-btn")
let counter = 0
const a = document.querySelector("#a")  || ""
const b = document.querySelector("#b")  || ""
const c = document.querySelector("#c")  || ""
const d = document.querySelector("#d")  || ""
let currentQuestion = questions[counter] 
//console.log(a.innerText)
const ol = document.querySelector("ol")
let score = 0
let answered = false

const lis = document.querySelectorAll("li")
console.log(lis)
console.log(typeof(lis))

//const lis = ol.children
//console.log(lis)
//console.log(typeof(lis))


render()


nextBtn.addEventListener ('click', () => {
    //console.log("next")
    answered = false

    colorCleaner()
    render()
})

// console.log(questions)
/* questions.forEach(quest => {
    console.log(quest.question)

}) */

function render() {
    if (counter < questions.length ){
        /* let */ currentQuestion = questions[counter]      // move declaring out of function (to top of code)
        //console.log(currentQuestion[`question`])
        let currentQuestionText = currentQuestion[`question`]
        hTow.innerText = currentQuestionText
        //console.log(currentQuestion[`a`] )
        
        a.innerText = currentQuestion[`a`]
        b.innerText = currentQuestion[`b`]
        c.innerText = currentQuestion[`c`]
        d.innerText = currentQuestion[`d`]
        //console.log(a.innerText)
        //console.log(currentQuestion[`a`] )

    } else {
        //console.log("finish. your resulte : ")
        hTow.innerText = "finish"
        ol.innerHTML = `<li> your score: ${score} </li>`
        nextBtn.style.display = "none"
    }

    counter++

}

ol.addEventListener('click', (e) => {
    if (answered === false) {
    //    ol.forEach(() => {
    //        if (element.innerText === currentQuestion[`answer`]) {
    //            element.classList.add("green")
    //       }
    //    });

    // lis.forEach (li => {
    //            if (li.innerText === currentQuestion[`answer`]) {
    //                li.classList.add("green")
    //            }
    //        })

    //for (const child of ol.children) {
        //if (child.innerText === currentQuestion[`answer`] ) {
        //    child.classList.add.green
        //}  

        for (let key in lis) {
            if (lis[key].innerText === currentQuestion[`answer`] ) {
                lis[key].classList.add("green")
            }
        }
            
        
    
        if ( e.target.innerText === currentQuestion[`answer`] ) {
            //console.log("correct")
            score++
        } else {
            e.target.classList.add("red")
            //console.log("wrong")
        }
    }
    
    answered = true
})

function colorCleaner() {
    const red = document.querySelector(".red")
    red && red.classList.remove("red")
    const green = document.querySelector(".green")
    green.classList.remove("green")
}


