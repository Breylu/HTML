// document.cookie =
//   "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie =
//   "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// setCookie("firstName", "Spongebob", 365);
// deleteCookie("firstName");
// deleteCookie("lastName");

const firstText = document.querySelectorAll("#firstText");
const lastText = document.querySelectorAll("#lastText");
const submitBtn = document.querySelectorAll("#submitBtn");
const cookieBtn = document.querySelectorAll("#cookieBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

function setCookie(name, value, expireDate) {
  const date = new Date();
  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);
  let expires = "expires= " + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;
  cArray.forEach((element) => {
    if (element.indexOf(name) === 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

setCookie(`firstName`, `Spongebob`, 365);
setCookie(`lastName`, `SquarePants`, 365);
console.log(getCookie(`lastName`));
