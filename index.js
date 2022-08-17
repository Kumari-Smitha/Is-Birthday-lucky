const inputDob = document.querySelector("#dob-input");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-button");
const textarea = document.querySelector("#text-area");

textarea.style.display = "none";

const addDate = ()=>{
    let datesum = 0;
    // console.log(inputDob.value);
    for (let i = 0; i < inputDob.value.length; i++) {
        const num = parseInt(inputDob.value.charAt(i));
        if (!isNaN(num)) {
            datesum += num;
        }
    }

    // console.log(datesum)
    return datesum;
}


const checkLucky = ()=>{
    const dob = addDate();
    const number = luckyNum.value;
    if(dob%number === 0){
        console.log("lucky")
        textarea.style.display = "block";
        textarea.innerText = "Yayy! "+ number+" is lucky!";
    }else {
        console.log("nooooooo")
        textarea.style.display = "block";
        textarea.innerText = "Oops! It's not lucky.";
    }
}



checkBtn.addEventListener("click", checkLucky)