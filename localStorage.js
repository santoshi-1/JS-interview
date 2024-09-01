const user = {
  firstName: "Santoshi",
  lastName: "Karuturi",
};

localStorage.setItem("key", "value");
localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem(user)));
localStorage.removeItem("key");

sessionStorage.setItem("name", "Santoshi");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

document.cookie =
  "firstName=santoshi;expires=" + new Date(2024, 7, 12).toUTCString();

document.cookie =
  "lastName=karuturi;expires=" + new Date(2024, 7, 12).toUTCString();

console.log(document.cookie);
