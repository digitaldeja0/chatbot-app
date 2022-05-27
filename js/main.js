const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");

console.log(a1, a2, a3);

function check(a) {
  console.log(` ${a} this was clicked`);
}

a1.addEventListener("click", makeReq);
a2.addEventListener("click", () => {
  console.log("C was clicked");
});
a3.addEventListener("click", () => {
  console.log("D was clicked");
});

document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  r1.style.display = "block";
  r1.textContent = `Hi ${data.name}! How can I help you today?`;

  window.setInterval(() => {
    a1.style.display = "block";
  }, 1000);
  window.setInterval(() => {
    a2.style.display = "block";
  }, 2000);
  window.setInterval(() => {
    a3.style.display = "block";
  }, 3000);

  a1.addEventListener("click", () => {
    r2.style.display = "block";
    r2.textContent = `hello ${data.name}, your balance is ${data.status}`;
  });
  a2.addEventListener("click", () => {
    r2.style.display = "block";
    r2.textContent = `Okay, here is a link add fund. Is there anything else I can help you with?`;
    link1.style.display = "block";
  });
  a3.addEventListener("click", () => {
    r2.style.display = "block";
    r2.textContent = `Okay, here is a link transfer fund. Is there anything else I can help you with?`;
    link2.style.display = "block";
  });
}
