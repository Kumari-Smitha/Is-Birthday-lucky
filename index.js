const inputDob = document.querySelector("#dob-input");
const num = document.querySelector("#lucky-num").value;
const checkBtn = document.querySelector("#check-button");



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
    console.log(dob);
}



checkBtn.addEventListener("click", checkLucky)