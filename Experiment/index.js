// console.log(`Hello`);
// console.log("i dont like pizza");

// window.alert("BIG CHUUNGUS COMING");
// window.alert("PLIZ ENABLE COOKIE, NO SKAM");

// It was a scam all along

// document.getElementById("myPP").textContent = "SMD";
// document.getElementById("myPP").style.color = "black";

// let age = 25;
// let price = 10.99;

// console.log(`You are ${age} years old`);
// console.log(`You cost ${price} dollars!`)

// let forSale = true;

// console.log(`Is this care for sale: ${forSale}`)

// let username;

// document.getElementById("mySubmit").onclick = function(){
 
//     username = document.getElementById("myText").value;
//     console.log(username);

// }

// let age1 = window.prompt("How old are you");
//     age1 = Number(age1);
//     age1 += 1;

//     console.log(age1);

let count = 0;

function updateDisplay(){
    document.getElementById("display").textContent = count;
}

function increaseCount(value){
    count ++;
    updateDisplay();
}

function decreaseCount(value){
     if (count >= 1){
        count --;
     }
    updateDisplay();
}

function clearDisplay(value){
    count = 0;
    updateDisplay();
}