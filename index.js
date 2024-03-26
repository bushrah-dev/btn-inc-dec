let add = document.querySelector(".add")
let minus = document.querySelector(".minus")
let num = document.querySelector(".num")

let randomNum = 1
add.addEventListener("click", ()=> {
    randomNum++
    randomNum = (randomNum < 10) ? "0" + randomNum : randomNum
    num.textContent = randomNum
    console.log(randomNum)
})


minus.addEventListener("click", ()=> {
    if(randomNum > 1){
        randomNum--
        randomNum = (randomNum < 10) ? "0" + randomNum : randomNum
        num.textContent = randomNum
    }
})