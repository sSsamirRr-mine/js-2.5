'use strict';

const table = document.querySelector("table")
const input = document.querySelector("input")
const dark = document.querySelector("#btn")
const send = document.querySelector("#btn-send")

let arr = []

function adds() {
    table.innerHTML = ''
    arr.forEach((Item) => {

        let tr = document.createElement("tr")
        let checked = document.createElement("td")
        let inp = document.createElement("input")
        let text = document.createElement("td")
        let ii = document.createElement("td")
        let pen = document.createElement("i")
        let trash = document.createElement("i")

        inp.type = 'checkbox'
        checked.appendChild(inp)
        text.innerHTML = Item

        text.style.color = "var(--my-black)"
        checked.classList.add('checked')
        pen.classList.add('fa-pen')
        pen.classList.add('fa-solid')
        trash.classList.add('fa-solid')
        trash.classList.add('fa-trash')
        text.classList.add("id")
        ii.classList.add('ii')
        ii.appendChild(pen)
        ii.appendChild(trash)

        tr.appendChild(checked)
        tr.appendChild(text)
        tr.appendChild(ii)

        table.appendChild(tr)
    })
}
adds()

send.addEventListener('click', () => {
    if (input.value.trim() != "") {
        arr.push(input.value.trim())
        adds()
    }

    input.value = ''
})

const root = document.documentElement

// dark.addEventListener('click', () => {
//     root.style.setProperty('--my-white', "black")
//     root.style.setProperty('--my-purple', "white")
//     root.style.setProperty('--my-black', "white")
//     dark.addEventListener('click', () => {
//         root.style.setProperty('--my-white', "white")
//         root.style.setProperty('--my-purple', "#6C63FF")
//         root.style.setProperty('--my-black', "black")

//     })
// })

dark.addEventListener("click", () => {
    document.body.classList.toggle("dod");
})
