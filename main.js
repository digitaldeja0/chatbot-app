const q1 = document.querySelector("#q1");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");

console.log(q1, a1, a2, a3);

function check(a) {
  console.log(` ${a} this was clicked`);
}

q1.addEventListener("click", () => {
  console.log("A was clicked");
});
a1.addEventListener("click", () => {
  console.log("B was clicked");
});
a2.addEventListener("click", () => {
  console.log("C was clicked");
});
a3.addEventListener("click", () => {
  console.log("D was clicked");
});
