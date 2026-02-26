window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekformazasa();
  esemenykezeles1();
  esemenykezeles2();
});

function elemekElerese1() {
  const hElem = document.querySelectorAll("section h2")[0];
  console.log(hElem.innerHTML);
}
function elemekElerese2() {
  const masodikElem = document.getElementById("ide");
  masodikElem.innerHTML = "<p>jó reggelt</p>";
}

function elemekElerese3() {
  const harmadikElem = document.getElementsByClassName("ide")[0];
  harmadikElem.innerHTML = "<p>jó reggelt</p>";
}

function elemekElerese4() {
  const negyedikElem = document.getElementsByClassName("lista")[0];
  const lista = [];
  for (let index = 0; index <= 5; index++) {
    let szam = Math.floor(Math.random() * 21) + 10;
    lista.push(szam);
  }
  negyedikElem.innerHTML = "<ul>";
  for (let index = 0; index < lista.length; index++) {
    negyedikElem.innerHTML += `<li>${lista[index]}</li>`;
  }
  negyedikElem.innerHTML += "</ul>";
}

function elemekformazasa() {
  const negyedikElem = document.getElementsByClassName("lista")[0];

  negyedikElem.classList.add("formazott");
}

function esemenykezeles1() {
  const negyedikElem = document.getElementsByClassName("lista")[0];
  negyedikElem.addEventListener("click", esemenykezeles);
  
}
function esemenykezeles() {
  const negyedikElem = document.getElementsByClassName("lista")[0];

  const otodikElem = document.getElementsByClassName("kattintasutan")[0];
  otodikElem.innerHTML = negyedikElem.innerHTML;
}

function esemenykezeles2() {
    const feladatElem=document.getElementsByClassName("feladat");
    feladatElem[0].innerHTML+=`<button>OK</button>`;
    const gombEleme=document.querySelector(".feladat button")
    gombEleme.addEventListener("click",keprak)





}

function keprak(){
    const feladatElem=document.getElementsByClassName("feladat")
    feladatElem[0].innerHTML=`<div><img src="" alt="kep"></div>`
}