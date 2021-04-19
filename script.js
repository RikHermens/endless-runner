const character = document.getElementById("character");
const block = document.getElementById("block");
let counter = 0;

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

document.body.addEventListener("mousedown", () => {
    if (character.classList != "animate") {
        character.classList.add("animate");
        setTimeout(() => {
            character.classList.remove("animate");
        }, 300)
    }

})

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        alert("You lose!");
        counter = 0;
    }
}, 10)