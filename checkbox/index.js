const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const dislikeResult = document.getElementById("dislikeResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        dislikeResult.textContent = `You are gay`;
    }
    else{
        dislikeResult.textContent = `You are homosexual`;
    }
    
    if(visaBtn.checked){
        paymentResult.textContent = `Ty for RP`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `Ty for Robux`
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Ty for Vbux`
    }
    else{
        paymentResult.textContent = `HAH poor`
    }
}