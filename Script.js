const menuBtn = document.getElementById("menuBtn");
const shortcutMenu = document.getElementById("shortcutMenu");
const message = document.getElementById("message");

// Show and hide menu
menuBtn.addEventListener("click", () => {
    shortcutMenu.classList.toggle("show");
});

// Keyboard shortcuts
document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "h") {
        message.textContent = "Home shortcut pressed!";
    }

    if (event.key.toLowerCase() === "s" &&
        !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        message.textContent = "Search shortcut pressed!";
    }

    if (event.key === "Escape") {
        shortcutMenu.classList.remove("show");
        message.textContent = "Menu closed!";
    }

    if (event.key === "?") {
        shortcutMenu.classList.add("show");
        message.textContent = "Shortcut menu opened!";
    }
});

// Event bubbling example
shortcutMenu.addEventListener("click", function() {
    console.log("Menu clicked");
});

document.querySelector(".container")
    .addEventListener("click", function() {
        console.log("Container clicked");
    });
