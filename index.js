const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");
const btn11 = document.getElementById("btn-11");
const btn12 = document.getElementById("btn-12");
const btn13 = document.getElementById("btn-13");
const btn14 = document.getElementById("btn-14");
const btn15 = document.getElementById("btn-15");
const btn16 = document.getElementById("btn-16");
const btn17 = document.getElementById("btn-17");
const btn18 = document.getElementById("btn-18");
const btn19 = document.getElementById("btn-19");
const btn20 = document.getElementById("btn-20");

const response1 = document.querySelector(".qst1 > p");
const response2 = document.querySelector(".qst2 > p");
const response3 = document.querySelector(".qst3 > p");
const response4 = document.querySelector(".qst4 > p");
const response5 = document.querySelector(".qst5 > p");
const response6 = document.querySelector(".qst6 > p");
const response7 = document.querySelector(".qst7 > p");
const response8 = document.querySelector(".qst8 > p");
const response9 = document.querySelector(".qst9 > p");
const response10 = document.querySelector(".qst10 > p");

let score = 0;
const scoreDiv = document.getElementById("score")

function verifiereponse(button, response) {
    const Correcte = button.getAttribute('data-correct') ==='true';
    response.classList.add('show-response');

    if(Correcte) {
        score++;
        response.style.background = "green"
    } else {
        score -= 1
        response.style.background = "red"
    }

    scoreDiv.innerHTML = `<h2>Score : ${score}/10 </h2>`
}

btn1.addEventListener("click", () =>{
    verifiereponse(btn1, response1)
})

btn2.addEventListener("click", () =>{
    verifiereponse(btn2, response1)
})

btn3.addEventListener("click", () =>{
    verifiereponse(btn3, response2)
})

btn4.addEventListener("click", () =>{
    verifiereponse(btn4, response2)
})


btn5.addEventListener("click", () =>{
    verifiereponse(btn5, response3)
})

btn6.addEventListener("click", () =>{
    verifiereponse(btn6, response3)
})

btn7.addEventListener("click", () =>{
    verifiereponse(btn7, response4)
})

btn8.addEventListener("click", () =>{
    verifiereponse(btn8, response4)
})

btn9.addEventListener("click", () =>{
    verifiereponse(btn9, response5)
})

btn10.addEventListener("click", () =>{
    verifiereponse(btn10, response5)
})

btn11.addEventListener("click", () =>{
    verifiereponse(btn11, response6)
})

btn12.addEventListener("click", () =>{
    verifiereponse(btn12, response6)
})

btn13.addEventListener("click", () =>{
    verifiereponse(btn13, response7)
})

btn14.addEventListener("click", () =>{
    verifiereponse(btn14, response7)
})

btn15.addEventListener("click", () =>{
    verifiereponse(btn15, response8)
})

btn16.addEventListener("click", () =>{
    verifiereponse(btn16, response8)
})

btn17.addEventListener("click", () =>{
    verifiereponse(btn17, response9)
})

btn18.addEventListener("click", () =>{
    verifiereponse(btn18, response9)
})

btn19.addEventListener("click", () =>{
    verifiereponse(btn19, response10)
})

btn20.addEventListener("click", () =>{
    verifiereponse(btn19, response10)
})