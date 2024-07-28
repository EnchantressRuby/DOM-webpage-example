const header = document.querySelector(".header")
header.style.backgroundColor = "maroon"
header.style.color = "white"
header.style.padding = "1rem"

const title = document.getElementById("title")
title.textContent = "JS DOM Assignment-1"
title.style.display = "flex"
title.style.justifyContent = "center"
title.style.marginBottom = "1rem"

const navItem = document.querySelector(".nav-item")
navItem.style.display = "flex"
navItem.style.justifyContent = "center"
navItem.style.gap = "1rem"
navItem.style.listStyle = "none"

const username = document.querySelector("#username")
username.placeholder = "Ruby"
username.disabled = true
username.style.padding = "0.4rem"
username.style.borderRadius = "0.3rem"

const password = document.querySelector("#password")
password.placeholder = "1903"
password.disabled = true
password.style.padding = "0.4rem"
password.style.borderRadius = "0.3rem"
password.type = "text"

const btn = document.querySelector(".btn")
btn.style.backgroundColor = "palegreen"
btn.style.color = "black"
btn.style.padding = "0.5rem"
btn.style.borderRadius = "0.3rem"
btn.style.cursor = "pointer"
btn.style.border = "none"
btn.textContent = "LOGIN"

const h3 = document.getElementById("projects").querySelector("h3")
h3.textContent = "JS DOM Projects"
h3.style.marginBottom = "1rem"

const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Income-Outcome Project", "Api Projects"]
const ul = document.getElementById("projects").querySelector("ul")
myProjects.forEach(projects => {
    ul.innerHTML += `<li>${projects}</li>`
})