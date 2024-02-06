const newH1 = document.createElement("h1");
newH1.textContent = "i dislike Spongebob";
newH1.id = "myH1";
newH1.style.color = "tomato";
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
