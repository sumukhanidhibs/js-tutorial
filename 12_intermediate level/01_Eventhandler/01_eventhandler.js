const button = document.querySelector("button")
const msg = document.querySelector(".msg")
let clicks = 0;
button.addEventListener('click', (e) => {
    clicks = clicks + 1
    msg.innerHTML = `You clicked this button ${clicks} times`
    e.target.innerHTML = `You clicked this button ${clicks} times`
})